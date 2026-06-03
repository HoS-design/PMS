(() => {
  const STORAGE_KEY = "hos.asselAbenteuer.phaser.v1";
  const WORLD = { width: 2200, height: 1400 };
  const SAFE = { x: 270, y: 220 };
  const DECOMPOSER_SITE = { x: 1040, y: 940, radius: 96, needed: 5 };
  const EVENT_SPAWN_MS = 9000;
  const MATERIAL_SPAWN_MS = 11500;
  const SHELL_BUILD_MS = 420;
  const SHELL_DRAIN_PER_SEC = 34;
  const SHELL_RECHARGE_PER_SEC = 24;
  const SHELL_MIN_START = 24;

  const missions = [
    { id: 1, code: "A1", short: "Aufenthaltsort", name: "Assel-Auftrag 1: Aufenthaltsort analysieren", prompt: "Warum bevorzugen Asseln feuchte, dunkle und geschützte Orte?" },
    { id: 2, code: "A2", short: "Austrocknung", name: "Assel-Auftrag 2: Austrocknungs-Alarm", prompt: "Warum ist Austrocknung für Asseln gefährlich? Was hast du an der Feuchtigkeitsanzeige beobachtet?" },
    { id: 3, code: "A3", short: "Abfall-Abbau", name: "Assel-Auftrag 3: Abfall-Abbau sichern", prompt: "Welche Rolle haben Asseln als Zersetzer/Destruenten im Stoffkreislauf?" },
    { id: 4, code: "A4", short: "Anatomie", name: "Assel-Auftrag 4: Anatomie-Analyse", prompt: "Welche Merkmale des Körperbaus hast du zugeordnet? Verwende Fachbegriffe." },
    { id: 5, code: "A5", short: "Arten-Archiv", name: "Assel-Auftrag 5: Arten-Archiv öffnen", prompt: "Warum sind Asseln keine Insekten, sondern Krebstiere?" },
    { id: 6, code: "A6", short: "Acker-Abhängigkeiten", name: "Assel-Auftrag 6: Acker-Abhängigkeiten aufdecken", prompt: "Warum sind Asseln für Boden, Nahrungskette und Stoffkreislauf wichtig?" }
  ];

  const zones = [
    { type: "dry", label: "trockene Erde", x: 0, y: 0, w: WORLD.width, h: WORLD.height },
    { type: "wet", label: "feuchte Erde", x: 120, y: 120, w: 430, h: 340 },
    { type: "leaf", label: "Laub-/Zersetzerbereich", x: 680, y: 130, w: 540, h: 330 },
    { type: "rock", label: "steiniger Boden", x: 1310, y: 100, w: 460, h: 330 },
    { type: "dark", label: "dunkles Versteck", x: 1750, y: 120, w: 320, h: 360 },
    { type: "wet", label: "feuchte Erde", x: 1460, y: 650, w: 470, h: 330 },
    { type: "leaf", label: "Laub-/Zersetzerbereich", x: 760, y: 820, w: 560, h: 350 },
    { type: "rock", label: "steiniger Boden", x: 180, y: 780, w: 460, h: 360 },
    { type: "dark", label: "dunkles Versteck", x: 1660, y: 1030, w: 360, h: 250 }
  ];

  const stations = [
    { id: 1, x: 1895, y: 260, zone: "dunkle/feuchte Zone" },
    { id: 2, x: 1070, y: 600, zone: "trockene Zone" },
    { id: 3, x: 970, y: 1010, zone: "Laub-/Zersetzerbereich" },
    { id: 4, x: 425, y: 960, zone: "steiniger Boden" },
    { id: 5, x: 1540, y: 260, zone: "Arten-Archiv" },
    { id: 6, x: 1705, y: 805, zone: "Acker-Abhängigkeiten" },
    { id: 7, x: 1840, y: 1160, zone: "Assel-Abschluss" }
  ];

  const stationInfo = {
    1: { label: "A1\nOrt", icon: "Feuchte" },
    2: { label: "A2\nAlarm", icon: "Trocken" },
    3: { label: "A3\nAbbau", icon: "Laub" },
    4: { label: "A4\nKörper", icon: "Analyse" },
    5: { label: "A5\nArchiv", icon: "Art" },
    6: { label: "A6\nAcker", icon: "Netz" },
    7: { label: "Abschluss", icon: "Quiz" }
  };

  const pickupNames = {
    leaf: "Laubrest",
    wood: "Holzrest",
    plant: "Pflanzenrest"
  };

  const obstacles = [
    { x: 620, y: 260, w: 85, h: 90, kind: "stone" },
    { x: 1290, y: 235, w: 95, h: 100, kind: "stone" },
    { x: 1580, y: 405, w: 150, h: 52, kind: "bark" },
    { x: 510, y: 640, w: 220, h: 58, kind: "bark" },
    { x: 1015, y: 745, w: 86, h: 86, kind: "stone" },
    { x: 1340, y: 910, w: 200, h: 56, kind: "bark" },
    { x: 310, y: 1120, w: 96, h: 96, kind: "stone" },
    { x: 735, y: 1165, w: 170, h: 54, kind: "bark" },
    { x: 1970, y: 700, w: 92, h: 92, kind: "stone" },
    { x: 1800, y: 940, w: 180, h: 52, kind: "bark" },
    { x: 890, y: 415, w: 68, h: 68, kind: "stone" },
    { x: 350, y: 500, w: 68, h: 68, kind: "stone" }
  ];

  const organicPickups = [
    [205, 365, "leaf"], [340, 270, "wood"], [750, 230, "leaf"], [925, 270, "plant"],
    [1130, 355, "wood"], [835, 910, "leaf"], [1110, 1000, "plant"], [1260, 1125, "wood"],
    [1515, 735, "leaf"], [1765, 820, "plant"], [1920, 1130, "wood"], [560, 1040, "leaf"]
  ];

  const dynamicOrganicSpawns = [
    [790, 875, "leaf"], [930, 890, "plant"], [1160, 930, "wood"], [1210, 1060, "leaf"], [880, 1110, "plant"], [1030, 1160, "wood"]
  ];

  const researchEvents = [
    { label: "Frischer Tau", zone: "wet", note: "Tau erhöht kurzfristig die Feuchtigkeit im Mikrohabitat." },
    { label: "trockene Kruste", zone: "dry", note: "Trockene Erde erhöht das Austrocknungsrisiko." },
    { label: "Pilzfäden", zone: "leaf", note: "Pilze und Zersetzer arbeiten gemeinsam am Abbau organischer Reste." },
    { label: "Fraßspur", zone: "leaf", note: "Fraßspuren zeigen, dass abgestorbenes Material Teil einer Nahrungskette ist." },
    { label: "Schattenritze", zone: "dark", note: "Dunkle, geschützte Orte helfen gegen Austrocknung und Feinde." }
  ];

  const falsePickups = [
    [640, 560, "Plastikstück", "plastic"], [1430, 515, "Metallstück", "metal"], [2070, 520, "frisches Blatt", "fresh"], [650, 1230, "Glasstück", "glass"]
  ];

  const fieldMarkers = [
    { id: "1a", mission: 1, x: 1845, y: 180, label: "Dunkel" },
    { id: "1b", mission: 1, x: 1980, y: 340, label: "Feucht" },
    { id: "1c", mission: 1, x: 1885, y: 420, label: "Schutz" },
    { id: "2a", mission: 2, x: 990, y: 535, label: "Trocken" },
    { id: "2b", mission: 2, x: 1115, y: 590, label: "Anzeige" },
    { id: "2c", mission: 2, x: 1035, y: 700, label: "Alarm" },
    { id: "4a", mission: 4, x: 270, y: 875, label: "Panzer" },
    { id: "4b", mission: 4, x: 460, y: 855, label: "Segmente" },
    { id: "4c", mission: 4, x: 315, y: 1065, label: "Fühler" },
    { id: "4d", mission: 4, x: 535, y: 1050, label: "Beine" },
    { id: "5a", mission: 5, x: 1430, y: 190, label: "Krebstier" },
    { id: "5b", mission: 5, x: 1570, y: 340, label: "Gliederfüßer" },
    { id: "5c", mission: 5, x: 1690, y: 210, label: "kein Insekt" },
    { id: "6a", mission: 6, x: 1540, y: 740, label: "Boden" },
    { id: "6b", mission: 6, x: 1720, y: 690, label: "Nahrungskette" },
    { id: "6c", mission: 6, x: 1845, y: 850, label: "Stoffkreislauf" }
  ];

  const markerGoals = { 1: 3, 2: 3, 4: 4, 5: 3, 6: 3 };

  const enemies = [
    { x: 820, y: 560, range: 230, speed: 58, chaseSpeed: 145, vision: 260, name: "Laufkäfer", texture: "enemyBeetle" },
    { x: 1390, y: 735, range: 210, speed: 50, chaseSpeed: 118, vision: 300, name: "Spinne", texture: "enemySpider", webShooter: true },
    { x: 590, y: 1025, range: 220, speed: 54, chaseSpeed: 132, vision: 240, name: "Acker-Räuber", texture: "enemyHunter" },
    { x: 1235, y: 1120, range: 230, speed: 46, chaseSpeed: 155, vision: 250, name: "Steinläufer", texture: "enemyCentipede", dasher: true },
    { x: 700, y: 720, range: 190, speed: 52, chaseSpeed: 125, vision: 230, name: "Ameise", texture: "enemyAnt", alarmAura: true },
    { x: 1980, y: 520, range: 180, speed: 44, chaseSpeed: 105, vision: 220, name: "Raubmilbe", texture: "enemyMite", dryAura: true }
  ];
  const ENEMY_RESPAWN_MS = 12000;
  const DEBUG_COLLISIONS = new URLSearchParams(window.location.search).has("debugCollisions");

  const quiz = [
    { q: "Asseln bevorzugen häufig ...", a: "b", o: [["a", "sehr trockene, helle Orte"], ["b", "feuchte, dunkle und geschützte Orte"], ["c", "heiße Metallflächen"]] },
    { q: "Asseln gehören fachlich zu den ...", a: "a", o: [["a", "Krebstieren"], ["b", "Insekten"], ["c", "Säugetieren"]] },
    { q: "Als Destruenten/Zersetzer ...", a: "c", o: [["a", "jagen sie ausschließlich große Tiere"], ["b", "machen sie Photosynthese"], ["c", "bauen sie abgestorbenes organisches Material mit ab"]] },
    { q: "Austrocknung ist gefährlich, weil ...", a: "a", o: [["a", "Asseln an Feuchtigkeit gebunden sind"], ["b", "Asseln nur bei völliger Trockenheit atmen können"], ["c", "Asseln dann zu Pflanzen werden"]] },
    { q: "Ein wichtiges Körpermerkmal der Assel ist ...", a: "b", o: [["a", "ein Fell mit Haaren"], ["b", "ein gegliederter Körper mit Panzer"], ["c", "Federn und Flügel"]] },
    { q: "Asseln sind Teil von Stoffkreisläufen, weil ...", a: "c", o: [["a", "sie Steine in Gold verwandeln"], ["b", "sie nie mit organischem Material in Kontakt kommen"], ["c", "sie beim Abbau organischer Reste beteiligt sind"]] },
    { q: "Warum sind Asseln keine Insekten?", a: "a", o: [["a", "Sie haben mehr Beinpaare und gehören zu den Krebstieren."], ["b", "Sie leben im Boden, und im Boden gibt es keine Insekten."], ["c", "Sie sind zu klein."]] },
    { q: "Welche Aussage ist am besten?", a: "b", o: [["a", "Kleine Bodenlebewesen sind ökologisch unwichtig."], ["b", "Auch kleine Bodenlebewesen können für Boden und Stoffkreislauf wichtig sein."], ["c", "Asseln kommen in der Natur nicht vor."]] }
  ];

  const el = {};
  let state = loadState();
  let game;
  let sceneRef;
  let modalLocked = false;
  const heldKeys = { up: false, left: false, down: false, right: false };

  function defaultState() {
    return {
      started: false,
      x: SAFE.x,
      y: SAFE.y,
      moisture: 70,
      organic: 0,
      deliveredOrganic: 0,
      decomposerScreenshotReady: false,
      fieldwork: {},
      fieldMarkers: {},
      researchEvents: 0,
      dynamicCollected: {},
      completed: {},
      screenshots: {},
      collected: {},
      warnedFalse: {},
      enemiesDefeated: {},
      defenseWins: 0,
      webbedUntil: 0,
      shellEnergy: 100,
      quizScore: null
    };
  }

  function loadState() {
    try {
      const loaded = { ...defaultState(), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
      loaded.deliveredOrganic = loaded.deliveredOrganic || 0;
      loaded.organic = loaded.organic || 0;
      loaded.fieldwork = loaded.fieldwork || {};
      loaded.fieldMarkers = loaded.fieldMarkers || {};
      loaded.dynamicCollected = loaded.dynamicCollected || {};
      loaded.researchEvents = loaded.researchEvents || 0;
      return loaded;
    } catch (error) {
      return defaultState();
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function qs(id) {
    return document.getElementById(id);
  }

  function initDom() {
    ["startScreen", "progressGrid", "activeMission", "organicCount", "defenseCount", "shellText", "shellBar", "screenshotCount", "moistureText", "moistureBar", "contextHint", "wayHint", "miniMap", "modal", "modalTitle", "modalLead", "modalBody", "toast", "protocolSection", "protocolTemplate"].forEach((id) => {
      el[id] = qs(id);
    });

    qs("startBtn").addEventListener("click", startGame);
    qs("startHeroBtn").addEventListener("click", startGame);
    qs("fullscreenBtn").addEventListener("click", toggleFullscreen);
    qs("protocolBtn").addEventListener("click", showProtocol);
    qs("helpBtn").addEventListener("click", showHelp);
    qs("resetBtn").addEventListener("click", resetGame);
    qs("closeModal").addEventListener("click", closeModal);
    qs("copyProtocolBtn").addEventListener("click", copyProtocol);
    qs("printBtn").addEventListener("click", () => window.print());
    el.modal.addEventListener("click", (event) => {
      if (event.target === el.modal) closeModal();
    });

    document.addEventListener("keydown", (event) => {
      const key = event.key.toLowerCase();
      const dir = keyDirection(key);
      if (dir) {
        heldKeys[dir] = true;
        event.preventDefault();
      }
      if (key === " " || event.code === "Space") {
        setRolling(true);
        event.preventDefault();
      }
      if (key === "escape") closeModal();
    });
    document.addEventListener("keyup", (event) => {
      const dir = keyDirection(event.key.toLowerCase());
      if (dir) {
        heldKeys[dir] = false;
        event.preventDefault();
      }
      if (event.key === " " || event.code === "Space") {
        setRolling(false);
        event.preventDefault();
      }
    });
    document.addEventListener("fullscreenchange", syncFullscreenState);
    bindTouchControls();
    bindRollControl();

    el.protocolTemplate.value = protocolText();
    renderHud();
  }

  function bindTouchControls() {
    document.querySelectorAll(".touch-btn").forEach((button) => {
      const dir = button.dataset.dir;
      const start = (event) => {
        event.preventDefault();
        heldKeys[dir] = true;
        button.classList.add("active");
      };
      const stop = (event) => {
        event.preventDefault();
        heldKeys[dir] = false;
        button.classList.remove("active");
      };
      button.addEventListener("pointerdown", start);
      button.addEventListener("pointerup", stop);
      button.addEventListener("pointerleave", stop);
      button.addEventListener("pointercancel", stop);
      button.addEventListener("contextmenu", (event) => event.preventDefault());
    });
  }

  function bindRollControl() {
    const button = qs("rollBtn");
    const start = (event) => {
      event.preventDefault();
      setRolling(true);
    };
    const stop = (event) => {
      event.preventDefault();
      setRolling(false);
    };
    button.addEventListener("pointerdown", start);
    button.addEventListener("pointerup", stop);
    button.addEventListener("pointerleave", stop);
    button.addEventListener("pointercancel", stop);
    button.addEventListener("contextmenu", (event) => event.preventDefault());
  }

  function stopPlayerInput() {
    Object.keys(heldKeys).forEach((dir) => {
      heldKeys[dir] = false;
    });
    document.querySelectorAll(".touch-btn.active").forEach((button) => button.classList.remove("active"));
    setRolling(false);
  }

  function startGame() {
    if (!game && !bootPhaser()) return;
    state.started = true;
    saveState();
    el.startScreen.classList.add("hidden");
    renderHud();
    showToast("Assel-Abenteuer gestartet. Suche die Stationen A1 bis A6.");
  }

  function bootPhaser() {
    if (!window.Phaser) {
      showToast("Phaser konnte nicht geladen werden. Prüfe die Internetverbindung zum CDN.");
      return false;
    }

    game = new Phaser.Game({
      type: Phaser.AUTO,
      parent: "gameCanvas",
      backgroundColor: "#d8c49e",
      width: 900,
      height: 560,
      scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
      },
      physics: {
        default: "arcade",
        arcade: { debug: false }
      },
      scene: { preload, create, update }
    });
    return true;
  }

  function preload() {
    this.load.image("assetWoodLogs", "assets/kenney-wood-logs.png");
    this.load.image("assetStones", "assets/kenney-stones.png");
    this.load.image("assetRockBlock", "assets/kenney-rock-block.png");
  }

  function create() {
    sceneRef = this;
    this.lastSave = 0;
    this.lastStationAt = 0;
    this.blockedStationId = null;
    this.zoneText = "";
    createTextures(this);
    drawWorld(this);
    createObstacles(this);
    createDecomposerSite(this);
    createFieldMarkers(this);
    createPickups(this);
    createStations(this);
    createPlayer(this);
    createEnemies(this);
    createDynamicSystems(this);
    createOverlays(this);
    createControls(this);
    this.cameras.main.setBounds(0, 0, WORLD.width, WORLD.height);
    this.cameras.main.startFollow(this.player, true, 0.12, 0.12);
    this.physics.world.setBounds(0, 0, WORLD.width, WORLD.height);
    this.player.body.setCollideWorldBounds(true);
    updateStationLabels();
    renderHud();
  }

  function update(time, delta) {
    if (!this.player) return;
    const dt = delta / 1000;
    syncRollFallback(this);
    updateShell(this, dt);
    updateMoisture(this, dt);
    updateEnemies(this, dt);
    updateDynamicSystems(this);
    updateDecomposerPrompt(this);
    clearStationBlock(this);
    movePlayer(this);
    updateDirectionPointer(this);

    if (time - this.lastSave > 700) {
      state.x = Math.round(this.player.x);
      state.y = Math.round(this.player.y);
      state.shellEnergy = Math.round(state.shellEnergy ?? 100);
      saveState();
      this.lastSave = time;
    }
  }

  function createTextures(scene) {
    textureRect(scene, "dry", "#d9b87c", "#cfa464", "#ead09b");
    textureRect(scene, "wet", "#86cdbc", "#5fae9f", "#c1ebdf");
    textureRect(scene, "leafZone", "#8eb354", "#668d35", "#c5d88f");
    textureRect(scene, "rockZone", "#aab6c4", "#7c8794", "#d3dbe5");
    textureRect(scene, "dark", "#4a453e", "#302d29", "#6c6256");

    const assel = scene.make.graphics({ add: false });
    assel.lineStyle(3, 0x2b1e17, .92);
    for (let x = 18; x <= 58; x += 7) {
      assel.lineBetween(x, 51, x - 8, 62);
      assel.lineBetween(x, 21, x - 9, 11);
    }
    assel.lineStyle(3, 0x2b1e17, 1);
    assel.lineBetween(66, 31, 82, 18);
    assel.lineBetween(66, 41, 82, 54);
    assel.fillStyle(0x5d4030, 1).fillEllipse(38, 36, 68, 44);
    assel.fillStyle(0x6f4d3a, 1).fillEllipse(61, 36, 28, 32);
    assel.lineStyle(3, 0x2b1e17, 1).strokeEllipse(38, 36, 68, 44);
    assel.lineStyle(2, 0xdcc6b4, .68);
    for (let x = 16; x <= 58; x += 7) {
      assel.lineBetween(x, 17, x + 3, 53);
    }
    assel.lineStyle(2, 0x2b1e17, .45);
    assel.strokeEllipse(38, 36, 55, 31);
    assel.fillStyle(0x12100d, 1).fillCircle(69, 31, 2.8).fillCircle(69, 42, 2.8);
    assel.fillStyle(0xf2dfc9, .34).fillEllipse(35, 24, 36, 8);
    assel.generateTexture("assel", 88, 72);

    const rolled = scene.make.graphics({ add: false });
    rolled.fillStyle(0x5d4030, 1).fillCircle(42, 42, 34);
    rolled.lineStyle(5, 0x2b1e17, 1).strokeCircle(42, 42, 34);
    rolled.lineStyle(4, 0xdcc6b4, .68);
    for (let r = 12; r <= 30; r += 7) rolled.strokeCircle(42, 42, r);
    rolled.lineStyle(3, 0x2b1e17, .6).lineBetween(42, 8, 42, 76).lineBetween(10, 42, 74, 42);
    rolled.generateTexture("asselRolled", 84, 84);

    const beetle = scene.make.graphics({ add: false });
    beetle.fillStyle(0x263b2f, 1).fillEllipse(32, 31, 44, 32);
    beetle.fillStyle(0x435a46, 1).fillEllipse(48, 31, 24, 25);
    beetle.lineStyle(3, 0x111827, 1).strokeEllipse(32, 31, 44, 32);
    beetle.lineStyle(3, 0x111827, .9);
    for (let x = 14; x <= 48; x += 10) {
      beetle.lineBetween(x, 43, x - 8, 55);
      beetle.lineBetween(x, 17, x - 8, 5);
    }
    beetle.lineStyle(2, 0x9ca3af, .55).lineBetween(22, 18, 24, 45).lineBetween(33, 15, 34, 47);
    beetle.fillStyle(0xfbbf24, 1).fillCircle(55, 26, 3).fillCircle(55, 36, 3);
    beetle.generateTexture("enemyBeetle", 70, 62);

    const spider = scene.make.graphics({ add: false });
    spider.lineStyle(4, 0x1f2937, 1);
    for (let y = 14; y <= 46; y += 10) {
      spider.lineBetween(30, y, 6, y - 10);
      spider.lineBetween(30, y, 6, y + 10);
      spider.lineBetween(42, y, 66, y - 10);
      spider.lineBetween(42, y, 66, y + 10);
    }
    spider.fillStyle(0x4b2e35, 1).fillEllipse(36, 31, 34, 28);
    spider.fillStyle(0x6b3f4a, 1).fillCircle(49, 31, 12);
    spider.lineStyle(3, 0x111827, 1).strokeEllipse(36, 31, 34, 28).strokeCircle(49, 31, 12);
    spider.fillStyle(0xfca5a5, 1).fillCircle(54, 27, 3).fillCircle(54, 35, 3);
    spider.generateTexture("enemySpider", 72, 64);

    const hunter = scene.make.graphics({ add: false });
    hunter.fillStyle(0x5b341f, 1).fillEllipse(32, 31, 46, 28);
    hunter.fillStyle(0x7c4a2a, 1).fillEllipse(52, 31, 25, 22);
    hunter.lineStyle(3, 0x2b1a10, 1).strokeEllipse(32, 31, 46, 28).strokeEllipse(52, 31, 25, 22);
    hunter.lineStyle(3, 0x2b1a10, .9);
    for (let x = 13; x <= 50; x += 9) {
      hunter.lineBetween(x, 43, x - 9, 56);
      hunter.lineBetween(x, 18, x - 9, 5);
    }
    hunter.lineStyle(4, 0x2b1a10, 1).lineBetween(63, 27, 74, 20).lineBetween(63, 36, 74, 43);
    hunter.fillStyle(0xfef3c7, 1).fillCircle(58, 27, 3).fillCircle(58, 36, 3);
    hunter.generateTexture("enemyHunter", 80, 64);

    const centipede = scene.make.graphics({ add: false });
    centipede.lineStyle(3, 0x2b1a10, .95);
    for (let i = 0; i < 8; i++) {
      const x = 12 + i * 9;
      centipede.lineBetween(x, 42, x - 5, 55);
      centipede.lineBetween(x, 20, x - 5, 7);
    }
    for (let i = 0; i < 8; i++) {
      centipede.fillStyle(i % 2 ? 0x8b451f : 0x6b2f16, 1).fillEllipse(12 + i * 9, 31, 18, 24);
      centipede.lineStyle(2, 0x2b1a10, .7).strokeEllipse(12 + i * 9, 31, 18, 24);
    }
    centipede.fillStyle(0xfef3c7, 1).fillCircle(76, 26, 3).fillCircle(76, 36, 3);
    centipede.generateTexture("enemyCentipede", 88, 64);

    const ant = scene.make.graphics({ add: false });
    ant.lineStyle(3, 0x1f2937, 1);
    for (let x = 18; x <= 48; x += 10) {
      ant.lineBetween(x, 42, x - 8, 55);
      ant.lineBetween(x, 20, x - 8, 8);
    }
    ant.fillStyle(0x3b2417, 1).fillEllipse(18, 31, 20, 18).fillEllipse(36, 31, 24, 22).fillEllipse(56, 31, 24, 20);
    ant.lineStyle(3, 0x111827, 1).strokeEllipse(18, 31, 20, 18).strokeEllipse(36, 31, 24, 22).strokeEllipse(56, 31, 24, 20);
    ant.lineBetween(64, 27, 76, 16).lineBetween(64, 36, 76, 48);
    ant.fillStyle(0xfbbf24, 1).fillCircle(61, 27, 3).fillCircle(61, 36, 3);
    ant.generateTexture("enemyAnt", 82, 64);

    const mite = scene.make.graphics({ add: false });
    mite.fillStyle(0x7f1d1d, 1).fillEllipse(34, 32, 48, 38);
    mite.fillStyle(0x991b1b, 1).fillCircle(50, 30, 16);
    mite.lineStyle(3, 0x450a0a, 1).strokeEllipse(34, 32, 48, 38).strokeCircle(50, 30, 16);
    mite.lineStyle(3, 0x450a0a, .9);
    for (let x = 15; x <= 50; x += 10) {
      mite.lineBetween(x, 45, x - 7, 58);
      mite.lineBetween(x, 18, x - 7, 5);
    }
    mite.fillStyle(0xfca5a5, 1).fillCircle(56, 25, 3).fillCircle(56, 35, 3);
    mite.generateTexture("enemyMite", 72, 64);

    const web = scene.make.graphics({ add: false });
    web.lineStyle(3, 0xe0f2fe, .95).strokeCircle(20, 20, 15);
    web.lineStyle(2, 0x7dd3fc, .9);
    web.lineBetween(20, 5, 20, 35).lineBetween(5, 20, 35, 20).lineBetween(9, 9, 31, 31).lineBetween(31, 9, 9, 31);
    web.generateTexture("spiderWeb", 40, 40);

    const station = scene.make.graphics({ add: false });
    station.fillStyle(0x111827, 1).fillRoundedRect(0, 0, 62, 48, 10);
    station.lineStyle(3, 0xffffff, .92).strokeRoundedRect(2, 2, 58, 44, 9);
    station.generateTexture("station", 62, 48);

    const stationDone = scene.make.graphics({ add: false });
    stationDone.fillStyle(0x16a34a, 1).fillRoundedRect(0, 0, 62, 48, 10);
    stationDone.lineStyle(3, 0xffffff, .92).strokeRoundedRect(2, 2, 58, 44, 9);
    stationDone.generateTexture("stationDone", 62, 48);

    const final = scene.make.graphics({ add: false });
    final.fillStyle(0x7c3aed, 1).fillRoundedRect(0, 0, 74, 52, 10);
    final.lineStyle(3, 0xffffff, .92).strokeRoundedRect(2, 2, 70, 48, 9);
    final.generateTexture("stationFinal", 74, 52);

    const leaf = scene.make.graphics({ add: false });
    leaf.fillStyle(0x7da43b, 1).fillEllipse(20, 20, 28, 16);
    leaf.lineStyle(2, 0x4b6823, 1).lineBetween(8, 20, 32, 20);
    leaf.generateTexture("pickupLeaf", 40, 40);

    const wood = scene.make.graphics({ add: false });
    wood.fillStyle(0x8f5f34, 1).fillRoundedRect(7, 15, 28, 12, 5);
    wood.lineStyle(2, 0x5f3b20, 1).strokeRoundedRect(7, 15, 28, 12, 5);
    wood.generateTexture("pickupWood", 40, 40);

    const plant = scene.make.graphics({ add: false });
    plant.fillStyle(0xa2bd58, 1).fillCircle(14, 18, 8).fillCircle(24, 20, 9).fillCircle(20, 28, 7);
    plant.generateTexture("pickupPlant", 40, 40);

    const wrong = scene.make.graphics({ add: false });
    wrong.fillStyle(0xef4444, 1).fillTriangle(20, 5, 36, 34, 4, 34);
    wrong.fillStyle(0xffffff, 1).fillRect(18, 14, 4, 13).fillCircle(20, 30, 2);
    wrong.generateTexture("pickupWrong", 40, 40);

    const plastic = scene.make.graphics({ add: false });
    plastic.fillStyle(0xdbeafe, 1).fillRoundedRect(15, 8, 18, 34, 5);
    plastic.fillStyle(0x93c5fd, 1).fillRect(18, 5, 12, 7);
    plastic.fillStyle(0xffffff, .7).fillRoundedRect(19, 15, 7, 22, 3);
    plastic.lineStyle(3, 0x2563eb, .75).strokeRoundedRect(15, 8, 18, 34, 5);
    plastic.generateTexture("wrongPlastic", 48, 48);

    const metal = scene.make.graphics({ add: false });
    metal.fillStyle(0xcbd5e1, 1).fillRoundedRect(10, 14, 30, 24, 8);
    metal.fillStyle(0x94a3b8, 1).fillEllipse(25, 14, 30, 8).fillEllipse(25, 38, 30, 8);
    metal.lineStyle(3, 0x64748b, 1).strokeRoundedRect(10, 14, 30, 24, 8);
    metal.lineStyle(2, 0xe2e8f0, .9).lineBetween(17, 18, 17, 34).lineBetween(27, 18, 27, 34);
    metal.generateTexture("wrongMetal", 50, 50);

    const fresh = scene.make.graphics({ add: false });
    fresh.fillStyle(0x22c55e, 1).fillEllipse(25, 24, 34, 20);
    fresh.lineStyle(3, 0x15803d, 1).lineBetween(9, 24, 42, 24);
    fresh.lineStyle(2, 0x166534, .8).lineBetween(24, 24, 18, 16).lineBetween(27, 24, 36, 17).lineBetween(24, 25, 18, 33).lineBetween(28, 25, 36, 32);
    fresh.generateTexture("wrongFresh", 50, 50);

    const glass = scene.make.graphics({ add: false });
    glass.fillStyle(0xbff3ff, .92).fillTriangle(12, 40, 25, 8, 40, 35);
    glass.lineStyle(3, 0x0891b2, .75).strokeTriangle(12, 40, 25, 8, 40, 35);
    glass.lineStyle(2, 0xffffff, .85).lineBetween(24, 14, 29, 31);
    glass.generateTexture("wrongGlass", 50, 50);

    const marker = scene.make.graphics({ add: false });
    marker.fillStyle(0xffffff, .96).fillCircle(24, 24, 20);
    marker.lineStyle(4, 0x0ea5e9, 1).strokeCircle(24, 24, 20);
    marker.lineStyle(4, 0x172033, 1).strokeCircle(22, 22, 8).lineBetween(29, 29, 39, 39);
    marker.generateTexture("fieldMarker", 48, 48);
  }

  function textureRect(scene, name, base, dark, light) {
    const g = scene.make.graphics({ add: false });
    g.fillStyle(Phaser.Display.Color.HexStringToColor(base).color, 1).fillRect(0, 0, 96, 96);
    g.fillStyle(Phaser.Display.Color.HexStringToColor(light).color, .25);
    for (let i = 0; i < 18; i++) g.fillCircle((i * 23) % 96, (i * 41) % 96, 2 + (i % 4));
    g.fillStyle(Phaser.Display.Color.HexStringToColor(dark).color, .16);
    for (let i = 0; i < 12; i++) g.fillCircle((i * 37 + 9) % 96, (i * 19 + 12) % 96, 1 + (i % 3));
    if (name === "dry") {
      g.lineStyle(2, Phaser.Display.Color.HexStringToColor(dark).color, .32);
      for (let i = 0; i < 7; i++) {
        const x = (i * 31 + 12) % 96;
        const y = (i * 17 + 18) % 96;
        g.lineBetween(x, y, x + 13, y + 4);
        g.lineBetween(x + 8, y + 4, x + 5, y + 13);
      }
    }
    if (name === "wet") {
      g.fillStyle(0xe5fff8, .25);
      for (let i = 0; i < 9; i++) g.fillEllipse((i * 29 + 7) % 96, (i * 43 + 8) % 96, 12, 5);
    }
    if (name === "leafZone") {
      g.fillStyle(0x5b7b31, .38);
      for (let i = 0; i < 12; i++) g.fillEllipse((i * 19 + 10) % 96, (i * 31 + 15) % 96, 18, 8);
    }
    if (name === "rockZone") {
      g.lineStyle(2, 0x6c7580, .35);
      for (let i = 0; i < 10; i++) g.strokeEllipse((i * 23 + 9) % 96, (i * 37 + 12) % 96, 18, 13);
    }
    if (name === "dark") {
      g.fillStyle(0x111827, .18).fillRect(0, 0, 96, 96);
      g.fillStyle(0x83766a, .16);
      for (let i = 0; i < 6; i++) g.fillEllipse((i * 33 + 12) % 96, (i * 27 + 15) % 96, 28, 10);
    }
    g.generateTexture(name, 96, 96);
  }

  function drawWorld(scene) {
    scene.add.tileSprite(WORLD.width / 2, WORLD.height / 2, WORLD.width, WORLD.height, "dry");
    zones.slice(1).forEach((zone) => {
      scene.add.tileSprite(zone.x + zone.w / 2, zone.y + zone.h / 2, zone.w, zone.h, zone.type === "leaf" ? "leafZone" : zone.type);
      decorateZone(scene, zone);
    });
  }

  function decorateZone(scene, zone) {
    const g = scene.add.graphics().setDepth(1);
    if (zone.type === "dry") return;
    if (zone.type === "wet") {
      g.fillStyle(0xe9fff8, .28);
      for (let i = 0; i < 16; i++) {
        g.fillEllipse(zone.x + 24 + (i * 71) % Math.max(zone.w - 48, 1), zone.y + 28 + (i * 47) % Math.max(zone.h - 56, 1), 44, 12);
      }
    }
    if (zone.type === "leaf") {
      g.fillStyle(0x5e7f2f, .45);
      for (let i = 0; i < 34; i++) {
        g.fillEllipse(zone.x + 20 + (i * 53) % Math.max(zone.w - 40, 1), zone.y + 20 + (i * 37) % Math.max(zone.h - 40, 1), 28, 11);
      }
    }
    if (zone.type === "rock") {
      g.lineStyle(3, 0x707985, .35);
      for (let i = 0; i < 22; i++) {
        g.strokeEllipse(zone.x + 22 + (i * 61) % Math.max(zone.w - 44, 1), zone.y + 22 + (i * 43) % Math.max(zone.h - 44, 1), 34, 24);
      }
    }
    if (zone.type === "dark") {
      g.fillStyle(0x111827, .22).fillRect(zone.x, zone.y, zone.w, zone.h);
      g.lineStyle(5, 0x1f2937, .45).strokeRoundedRect(zone.x + 6, zone.y + 6, zone.w - 12, zone.h - 12, 18);
    }
  }

  function createObstacles(scene) {
    scene.obstacles = scene.physics.add.staticGroup();
    obstacles.forEach((item, index) => {
      const texture = item.kind === "stone" ? (index % 2 ? "assetStones" : "assetRockBlock") : "assetWoodLogs";
      const visual = scene.add.image(item.x, item.y, texture);
      const scaleX = item.w / visual.width;
      const scaleY = item.h / visual.height;
      visual.setScale(Math.min(scaleX, scaleY) * (item.kind === "stone" ? 1.25 : 1.55));
      visual.setDepth(4);
      const hitbox = obstacleHitbox(item);
      const body = scene.add.zone(item.x, item.y, hitbox.w, hitbox.h);
      scene.obstacles.add(body);
      if (DEBUG_COLLISIONS) {
        scene.add.graphics()
          .setDepth(100)
          .lineStyle(2, 0xef4444, .8)
          .strokeRect(item.x - hitbox.w / 2, item.y - hitbox.h / 2, hitbox.w, hitbox.h);
      }
    });
  }

  function obstacleHitbox(item) {
    if (item.kind === "bark") {
      return {
        w: Math.max(46, item.w * .52),
        h: Math.max(28, item.h * .68)
      };
    }
    return {
      w: Math.max(34, item.w * .62),
      h: Math.max(34, item.h * .62)
    };
  }

  function createDecomposerSite(scene) {
    scene.decomposer = {};
    const base = scene.add.graphics().setDepth(2);
    base.fillStyle(0x6f7f35, .36).fillCircle(DECOMPOSER_SITE.x, DECOMPOSER_SITE.y, DECOMPOSER_SITE.radius);
    base.lineStyle(5, 0x3f6212, .65).strokeCircle(DECOMPOSER_SITE.x, DECOMPOSER_SITE.y, DECOMPOSER_SITE.radius);
    base.fillStyle(0x8b5e34, .85).fillEllipse(DECOMPOSER_SITE.x, DECOMPOSER_SITE.y + 22, 126, 62);
    base.fillStyle(0x4d7c0f, .35);
    for (let i = 0; i < 12; i++) base.fillEllipse(DECOMPOSER_SITE.x - 52 + i * 9, DECOMPOSER_SITE.y + 10 + (i % 3) * 8, 24, 10);
    scene.decomposer.base = base;
    scene.decomposer.plant = scene.add.graphics().setDepth(6);
    scene.decomposer.label = scene.add.text(DECOMPOSER_SITE.x, DECOMPOSER_SITE.y - 106, "", {
      fontFamily: "Arial, sans-serif",
      fontSize: "14px",
      color: "#172033",
      backgroundColor: "rgba(255,255,255,.9)",
      padding: { x: 8, y: 5 },
      align: "center"
    }).setOrigin(.5).setDepth(20);
    scene.decomposer.screenshot = scene.add.text(DECOMPOSER_SITE.x, DECOMPOSER_SITE.y - 150, "", {
      fontFamily: "Arial, sans-serif",
      fontSize: "15px",
      color: "#78350f",
      backgroundColor: "rgba(255,251,235,.96)",
      padding: { x: 10, y: 7 },
      align: "center"
    }).setOrigin(.5).setDepth(30).setVisible(false);
    scene.decomposer.screenshot.setInteractive({ useHandCursor: true });
    scene.decomposer.screenshot.on("pointerdown", () => {
      if (state.fieldwork[3] && state.completed[3] && !state.screenshots[3]) showScreenshotStop(3);
    });
    renderDecomposerSite(scene);
  }

  function renderDecomposerSite(scene) {
    if (!scene || !scene.decomposer) return;
    const delivered = Math.min(state.deliveredOrganic || 0, DECOMPOSER_SITE.needed);
    const progress = delivered / DECOMPOSER_SITE.needed;
    const plant = scene.decomposer.plant;
    plant.clear();
    if (delivered > 0) {
      plant.lineStyle(7, 0x166534, 1).lineBetween(DECOMPOSER_SITE.x, DECOMPOSER_SITE.y + 22, DECOMPOSER_SITE.x, DECOMPOSER_SITE.y + 20 - 78 * progress);
      plant.fillStyle(0x22c55e, .95);
      for (let i = 0; i < delivered; i++) {
        const y = DECOMPOSER_SITE.y + 5 - i * 13;
        const side = i % 2 ? -1 : 1;
        plant.fillEllipse(DECOMPOSER_SITE.x + side * (18 + i * 2), y, 34, 15);
      }
      if (delivered >= DECOMPOSER_SITE.needed) {
        plant.fillStyle(0xfacc15, 1).fillCircle(DECOMPOSER_SITE.x, DECOMPOSER_SITE.y - 82, 13);
        plant.fillStyle(0xfef3c7, 1).fillCircle(DECOMPOSER_SITE.x - 4, DECOMPOSER_SITE.y - 86, 4);
      }
    }
    scene.decomposer.label.setText(`Zersetzungsplatz\n${delivered}/${DECOMPOSER_SITE.needed} Reste`);
    scene.decomposer.screenshot.setVisible(Boolean(state.fieldwork[3] && state.completed[3] && !state.screenshots[3]));
    if (scene.decomposer.screenshot.visible) {
      scene.decomposer.screenshot.setText("Assel-Akte A3 fertig\nScreenshot vom Stoffkreislauf sichern");
    }
  }

  function updateDecomposerPrompt(scene) {
    if (!scene.player || !scene.decomposer) return;
    const near = Phaser.Math.Distance.Between(scene.player.x, scene.player.y, DECOMPOSER_SITE.x, DECOMPOSER_SITE.y) < DECOMPOSER_SITE.radius + 18;
    if (near && state.organic > 0 && (state.deliveredOrganic || 0) < DECOMPOSER_SITE.needed) {
      deliverOrganic(scene);
    }
  }

  function deliverOrganic(scene) {
    const missing = DECOMPOSER_SITE.needed - (state.deliveredOrganic || 0);
    const amount = Math.min(state.organic, missing);
    if (amount <= 0) return;
    state.organic -= amount;
    state.deliveredOrganic = (state.deliveredOrganic || 0) + amount;
    addFloatingLabel(scene, DECOMPOSER_SITE.x, DECOMPOSER_SITE.y - 60, `${amount} Rest${amount > 1 ? "e" : ""} abgeliefert`, "#166534");
    if (state.deliveredOrganic >= DECOMPOSER_SITE.needed && !state.fieldwork[3]) {
      state.fieldwork[3] = true;
      addFloatingLabel(scene, DECOMPOSER_SITE.x, DECOMPOSER_SITE.y - 118, "Stoffkreislauf sichtbar", "#78350f");
      showToast("A3-Feldauftrag fertig: Der Zersetzungsplatz ist aufgebaut. Das Quiz ist an A3 freigeschaltet.");
    } else {
      showToast("Abgestorbenes Material am Zersetzungsplatz abgeliefert. Die Pflanze wächst.");
    }
    saveState();
    renderDecomposerSite(scene);
    renderRegeneration(scene);
    renderHud();
  }

  function renderRegeneration(scene) {
    if (!scene || !scene.regeneration) return;
    const delivered = Math.min(state.deliveredOrganic || 0, DECOMPOSER_SITE.needed);
    scene.regeneration.clear();
    if (delivered < 2) return;
    scene.regeneration.fillStyle(0x4ade80, .2);
    scene.regeneration.fillCircle(DECOMPOSER_SITE.x, DECOMPOSER_SITE.y, 120 + delivered * 18);
    scene.regeneration.fillStyle(0x22c55e, .5);
    for (let i = 0; i < delivered * 5; i++) {
      const angle = i * 1.91;
      const radius = 55 + (i * 23) % (70 + delivered * 15);
      const x = DECOMPOSER_SITE.x + Math.cos(angle) * radius;
      const y = DECOMPOSER_SITE.y + Math.sin(angle) * radius;
      scene.regeneration.fillEllipse(x, y, 16, 7);
    }
  }

  function createPickups(scene) {
    scene.organicGroup = scene.physics.add.staticGroup();
    organicPickups.forEach(([x, y, kind], index) => {
      if (state.collected[index]) return;
      const texture = kind === "leaf" ? "pickupLeaf" : kind === "wood" ? "pickupWood" : "pickupPlant";
      const sprite = scene.physics.add.staticSprite(x, y, texture);
      sprite.pickupId = index;
      sprite.kind = kind;
      sprite.setDepth(5);
      scene.tweens.add({ targets: sprite, scale: 1.12, duration: 900 + index * 30, yoyo: true, repeat: -1, ease: "Sine.easeInOut" });
      scene.organicGroup.add(sprite);
    });
    scene.falseGroup = scene.physics.add.staticGroup();
    falsePickups.forEach(([x, y, label, kind], index) => {
      const texture = { plastic: "wrongPlastic", metal: "wrongMetal", fresh: "wrongFresh", glass: "wrongGlass" }[kind] || "pickupWrong";
      const sprite = scene.physics.add.staticSprite(x, y, texture);
      sprite.pickupId = index;
      sprite.label = label;
      sprite.kind = kind;
      sprite.setDepth(5);
      scene.tweens.add({ targets: sprite, angle: kind === "fresh" ? 8 : 0, scale: 1.08, duration: 1000 + index * 70, yoyo: true, repeat: -1, ease: "Sine.easeInOut" });
      scene.falseGroup.add(sprite);
    });
  }

  function createDynamicSystems(scene) {
    scene.dynamicOrganicGroup = scene.physics.add.staticGroup();
    scene.researchEventGroup = scene.physics.add.staticGroup();
    scene.nextEventAt = scene.time.now + 1800;
    scene.nextMaterialAt = scene.time.now + 3200;
    scene.regeneration = scene.add.graphics().setDepth(3);
    scene.physics.add.overlap(scene.player, scene.dynamicOrganicGroup, collectDynamicOrganic, null, scene);
    scene.physics.add.overlap(scene.player, scene.researchEventGroup, collectResearchEvent, null, scene);
    renderRegeneration(scene);
  }

  function updateDynamicSystems(scene) {
    if (!scene.dynamicOrganicGroup || !state.started) return;
    if (scene.time.now > scene.nextEventAt) {
      spawnResearchEvent(scene);
      scene.nextEventAt = scene.time.now + Phaser.Math.Between(EVENT_SPAWN_MS, EVENT_SPAWN_MS + 5500);
    }
    if (scene.time.now > scene.nextMaterialAt) {
      spawnDynamicMaterial(scene);
      scene.nextMaterialAt = scene.time.now + Phaser.Math.Between(MATERIAL_SPAWN_MS, MATERIAL_SPAWN_MS + 5000);
    }
  }

  function spawnDynamicMaterial(scene) {
    if (!missionUnlocked(3) || state.fieldwork[3]) return;
    if (scene.dynamicOrganicGroup.getChildren().length >= 4) return;
    const [x, y, kind] = Phaser.Utils.Array.GetRandom(dynamicOrganicSpawns);
    const key = `dyn-${Date.now()}-${Math.round(Math.random() * 999)}`;
    if (state.dynamicCollected[key]) return;
    const texture = kind === "leaf" ? "pickupLeaf" : kind === "wood" ? "pickupWood" : "pickupPlant";
    const sprite = scene.physics.add.staticSprite(x, y, texture);
    sprite.kind = kind;
    sprite.dynamicId = key;
    sprite.setDepth(5);
    scene.dynamicOrganicGroup.add(sprite);
    scene.tweens.add({ targets: sprite, scale: 1.16, duration: 900, yoyo: true, repeat: -1, ease: "Sine.easeInOut" });
    addFloatingLabel(scene, x, y - 28, "neuer Rest", "#166534");
  }

  function spawnResearchEvent(scene) {
    if (scene.researchEventGroup.getChildren().length >= 2) return;
    const event = Phaser.Utils.Array.GetRandom(researchEvents);
    const zone = Phaser.Utils.Array.GetRandom(zones.filter((item) => item.type === event.zone));
    const x = Phaser.Math.Between(zone.x + 40, zone.x + zone.w - 40);
    const y = Phaser.Math.Between(zone.y + 40, zone.y + zone.h - 40);
    const sprite = scene.physics.add.staticSprite(x, y, "fieldMarker");
    sprite.eventLabel = event.label;
    sprite.eventNote = event.note;
    sprite.setTint(0xf59e0b);
    sprite.setDepth(6);
    scene.researchEventGroup.add(sprite);
    sprite.textLabel = scene.add.text(x, y - 34, event.label, {
      fontFamily: "Arial, sans-serif",
      fontSize: "11px",
      color: "#172033",
      backgroundColor: "rgba(255,251,235,.9)",
      padding: { x: 5, y: 3 }
    }).setOrigin(.5).setDepth(7);
    scene.time.delayedCall(8500, () => {
      if (!sprite.destroyed) {
        if (sprite.textLabel) sprite.textLabel.destroy();
        sprite.destroy();
      }
    });
  }

  function collectDynamicOrganic(player, pickup) {
    state.dynamicCollected[pickup.dynamicId] = true;
    state.organic = Math.min(DECOMPOSER_SITE.needed, (state.organic || 0) + 1);
    addFloatingLabel(sceneRef, pickup.x, pickup.y - 18, `${pickupNames[pickup.kind]} gesammelt`, "#166534");
    pickup.destroy();
    saveState();
    renderHud();
  }

  function collectResearchEvent(player, eventSprite) {
    state.researchEvents = (state.researchEvents || 0) + 1;
    if (eventSprite.textLabel) eventSprite.textLabel.destroy();
    addFloatingLabel(sceneRef, eventSprite.x, eventSprite.y - 20, eventSprite.eventLabel, "#92400e");
    showToast(`Forschungsereignis: ${eventSprite.eventNote}`);
    eventSprite.destroy();
    saveState();
    renderHud();
  }

  function createStations(scene) {
    scene.stationSprites = [];
    scene.stationGroup = scene.physics.add.staticGroup();
    stations.forEach((station) => {
      const isFinal = station.id === 7;
      const sprite = scene.physics.add.staticSprite(station.x, station.y, isFinal ? "stationFinal" : "station");
      sprite.stationId = station.id;
      sprite.setDepth(7);
      sprite.setCircle(isFinal ? 42 : 34, isFinal ? -5 : -3, isFinal ? -3 : -10);
      scene.stationGroup.add(sprite);
      const text = scene.add.text(station.x, station.y - (isFinal ? 3 : 1), stationInfo[station.id].label, {
        fontFamily: "Arial, sans-serif",
        fontSize: isFinal ? "12px" : "13px",
        color: "#ffffff",
        fontStyle: "bold",
        align: "center"
      }).setOrigin(.5).setDepth(9);
      const icon = scene.add.text(station.x, station.y - 46, stationInfo[station.id].icon, {
        fontFamily: "Arial, sans-serif",
        fontSize: "11px",
        color: "#172033",
        backgroundColor: "rgba(255,255,255,.86)",
        padding: { x: 6, y: 3 }
      }).setOrigin(.5).setDepth(8);
      sprite.icon = icon;
      sprite.label = text;
      scene.stationSprites.push(sprite);
    });
  }

  function createPlayer(scene) {
    scene.player = scene.physics.add.sprite(state.x || SAFE.x, state.y || SAFE.y, "assel");
    scene.player.setDamping(true).setDrag(0.88).setMaxVelocity(180);
    scene.player.setDepth(12);
    scene.player.body.setSize(54, 34).setOffset(15, 18);
    scene.tweens.add({ targets: scene.player, scaleY: .93, duration: 420, yoyo: true, repeat: -1, ease: "Sine.easeInOut" });
    scene.physics.add.collider(scene.player, scene.obstacles);
    scene.physics.add.overlap(scene.player, scene.organicGroup, collectOrganic, null, scene);
    scene.physics.add.overlap(scene.player, scene.falseGroup, touchFalsePickup, null, scene);
    scene.physics.add.overlap(scene.player, scene.fieldMarkerGroup, collectFieldMarker, null, scene);
    scene.physics.add.overlap(scene.player, scene.stationGroup, touchStation, null, scene);
  }

  function createFieldMarkers(scene) {
    if (!scene.fieldMarkerGroup) scene.fieldMarkerGroup = scene.physics.add.staticGroup();
    fieldMarkers.forEach((marker) => {
      if (!missionUnlocked(marker.mission)) return;
      if (state.fieldMarkers[marker.id] || state.fieldwork[marker.mission] || state.completed[marker.mission]) return;
      const sprite = scene.physics.add.staticSprite(marker.x, marker.y, "fieldMarker");
      sprite.markerId = marker.id;
      sprite.mission = marker.mission;
      sprite.markerLabel = marker.label;
      sprite.setDepth(6);
      scene.fieldMarkerGroup.add(sprite);
      const label = scene.add.text(marker.x, marker.y - 34, marker.label, {
        fontFamily: "Arial, sans-serif",
        fontSize: "11px",
        color: "#172033",
        backgroundColor: "rgba(255,255,255,.86)",
        padding: { x: 5, y: 3 }
      }).setOrigin(.5).setDepth(7);
      sprite.textLabel = label;
      scene.tweens.add({ targets: sprite, y: marker.y - 5, duration: 800, yoyo: true, repeat: -1, ease: "Sine.easeInOut" });
    });
  }

  function createEnemies(scene) {
    scene.enemyGroup = scene.physics.add.group({ allowGravity: false });
    enemies.forEach((enemy, index) => {
      if (!state.enemiesDefeated[index]) spawnEnemy(scene, index);
    });
    scene.webGroup = scene.physics.add.group({ allowGravity: false });
    scene.physics.add.overlap(scene.player, scene.webGroup, touchWeb, null, scene);
    scene.physics.add.collider(scene.enemyGroup, scene.obstacles, (enemySprite) => {
      chooseEnemyDirection(scene, enemySprite, true);
    });
    scene.physics.add.overlap(scene.player, scene.enemyGroup, touchEnemy, null, scene);
  }

  function spawnEnemy(scene, index) {
    const enemy = enemies[index];
    const sprite = scene.physics.add.sprite(enemy.x, enemy.y, enemy.texture);
    sprite.enemyId = index;
    sprite.enemyName = enemy.name;
    sprite.originPoint = { x: enemy.x, y: enemy.y };
    sprite.range = enemy.range;
    sprite.speedValue = enemy.speed;
    sprite.chaseSpeed = enemy.chaseSpeed;
    sprite.vision = enemy.vision;
    sprite.webShooter = Boolean(enemy.webShooter);
    sprite.dasher = Boolean(enemy.dasher);
    sprite.alarmAura = Boolean(enemy.alarmAura);
    sprite.dryAura = Boolean(enemy.dryAura);
    sprite.nextWebAt = 0;
    sprite.nextDashAt = 0;
    sprite.dashUntil = 0;
      sprite.isChasing = false;
      sprite.committedUntil = 0;
      sprite.nextTurnAt = 0;
    sprite.wanderAngle = Phaser.Math.FloatBetween(0, Math.PI * 2);
    sprite.setDepth(11);
    sprite.body.setSize(34, 26).setOffset(15, 17);
    scene.enemyGroup.add(sprite);
    const label = scene.add.text(enemy.x, enemy.y - 42, enemy.name, {
      fontFamily: "Arial, sans-serif",
      fontSize: "11px",
      color: "#172033",
      backgroundColor: "rgba(255,255,255,.8)",
      padding: { x: 5, y: 3 }
    }).setOrigin(.5).setDepth(10);
    sprite.nameLabel = label;
    addFloatingLabel(scene, enemy.x, enemy.y - 68, "Gegner zurück", "#334155");
    return sprite;
  }

  function updateEnemies(scene) {
    if (!scene.enemyGroup) return;
    if (el.modal.classList.contains("open")) {
      scene.enemyGroup.getChildren().forEach((enemy) => {
        if (enemy.body) enemy.setVelocity(0);
      });
      if (scene.webGroup) {
        scene.webGroup.getChildren().forEach((web) => {
          if (web.body) web.setVelocity(0);
        });
      }
      return;
    }
    scene.enemyGroup.getChildren().forEach((enemy) => {
      if (!enemy.body) return;
      const seesPlayer = enemyCanSeePlayer(scene, enemy);
      const alarmed = scene.time.now < (enemy.committedUntil || 0) && Phaser.Math.Distance.Between(enemy.x, enemy.y, scene.player.x, scene.player.y) < enemy.vision * 1.25;
      enemy.isChasing = seesPlayer || alarmed;
      let vx;
      let vy;
      if (seesPlayer || alarmed) {
        enemy.committedUntil = scene.time.now + 1100;
        const angle = Phaser.Math.Angle.Between(enemy.x, enemy.y, scene.player.x, scene.player.y);
        const dashActive = enemy.dasher && scene.time.now < (enemy.dashUntil || 0);
        const chaseSpeed = (scene.player.rollState === "active" ? enemy.chaseSpeed * .82 : enemy.chaseSpeed) * (dashActive ? 1.85 : 1);
        vx = Math.cos(angle) * chaseSpeed;
        vy = Math.sin(angle) * chaseSpeed;
        enemy.wanderAngle = angle;
        if (enemy.webShooter && scene.player.rollState !== "active") maybeShootWeb(scene, enemy, angle);
        if (enemy.dasher) maybeDash(scene, enemy);
        if (enemy.alarmAura) triggerAlarmAura(scene, enemy);
        if (enemy.dryAura) triggerDryAura(scene, enemy);
      } else {
        const nearEdge = enemy.x < 50 || enemy.y < 50 || enemy.x > WORLD.width - 50 || enemy.y > WORLD.height - 50;
        if (scene.time.now > enemy.nextTurnAt || enemyOutsideHome(enemy) || nearEdge) chooseEnemyDirection(scene, enemy, enemyOutsideHome(enemy) || nearEdge);
        vx = Math.cos(enemy.wanderAngle) * enemy.speedValue;
        vy = Math.sin(enemy.wanderAngle) * enemy.speedValue;
      }
      enemy.setVelocity(vx, vy);
      enemy.rotation = Phaser.Math.Angle.Between(0, 0, vx, vy);
      if (enemy.nameLabel) {
        enemy.nameLabel.setPosition(enemy.x, enemy.y - 42);
        enemy.nameLabel.setText(enemy.isChasing ? `${enemy.enemyName}!` : enemy.enemyName);
      }
    });
    updateWebs(scene);
  }

  function maybeDash(scene, enemy) {
    if (scene.time.now < (enemy.nextDashAt || 0)) return;
    const distance = Phaser.Math.Distance.Between(enemy.x, enemy.y, scene.player.x, scene.player.y);
    if (distance < 85 || distance > enemy.vision) return;
    enemy.dashUntil = scene.time.now + 520;
    enemy.nextDashAt = scene.time.now + Phaser.Math.Between(3200, 4600);
    addFloatingLabel(scene, enemy.x, enemy.y - 40, "Sprint!", "#7c2d12");
  }

  function triggerAlarmAura(scene, enemy) {
    if (enemy.nextAlarmAt && scene.time.now < enemy.nextAlarmAt) return;
    enemy.nextAlarmAt = scene.time.now + 1800;
    const distance = Phaser.Math.Distance.Between(enemy.x, enemy.y, scene.player.x, scene.player.y);
    if (distance > 150) return;
    scene.enemyGroup.getChildren().forEach((other) => {
      if (other === enemy || !other.body) return;
      const near = Phaser.Math.Distance.Between(enemy.x, enemy.y, other.x, other.y) < 260;
      if (near) other.committedUntil = scene.time.now + 1700;
    });
    addFloatingLabel(scene, enemy.x, enemy.y - 40, "Ameisenalarm", "#92400e");
  }

  function triggerDryAura(scene, enemy) {
    const distance = Phaser.Math.Distance.Between(enemy.x, enemy.y, scene.player.x, scene.player.y);
    if (distance > 135) return;
    state.moisture = Math.max(0, state.moisture - .045);
    if (!enemy.nextDryLabelAt || scene.time.now > enemy.nextDryLabelAt) {
      enemy.nextDryLabelAt = scene.time.now + 1600;
      addFloatingLabel(scene, enemy.x, enemy.y - 40, "trocken!", "#991b1b");
    }
  }

  function enemyCanSeePlayer(scene, enemy) {
    if (!scene.player || el.modal.classList.contains("open")) return false;
    const zone = currentZone(scene.player.x, scene.player.y);
    if (zone.type === "dark") return false;
    const distance = Phaser.Math.Distance.Between(enemy.x, enemy.y, scene.player.x, scene.player.y);
    const vision = zone.type === "leaf" ? enemy.vision * .72 : enemy.vision;
    return distance <= vision;
  }

  function maybeShootWeb(scene, enemy, angle) {
    if (scene.time.now < enemy.nextWebAt) return;
    const distance = Phaser.Math.Distance.Between(enemy.x, enemy.y, scene.player.x, scene.player.y);
    if (distance < 90 || distance > enemy.vision) return;
    enemy.nextWebAt = scene.time.now + Phaser.Math.Between(2300, 3400);
    const web = scene.physics.add.sprite(enemy.x, enemy.y, "spiderWeb");
    web.setDepth(10);
    web.lifeUntil = scene.time.now + 2600;
    web.seekAngle = angle;
    web.speedValue = 165;
    web.setVelocity(Math.cos(angle) * web.speedValue, Math.sin(angle) * web.speedValue);
    scene.webGroup.add(web);
    addFloatingLabel(scene, enemy.x, enemy.y - 38, "Netz!", "#0369a1");
  }

  function updateWebs(scene) {
    if (!scene.webGroup) return;
    scene.webGroup.getChildren().forEach((web) => {
      web.rotation += .08;
      if (scene.player && scene.player.rollState !== "active") {
        const targetAngle = Phaser.Math.Angle.Between(web.x, web.y, scene.player.x, scene.player.y);
        web.seekAngle = Phaser.Math.Angle.RotateTo(web.seekAngle || targetAngle, targetAngle, .045);
        web.setVelocity(Math.cos(web.seekAngle) * web.speedValue, Math.sin(web.seekAngle) * web.speedValue);
      }
      if (web.x < -60 || web.y < -60 || web.x > WORLD.width + 60 || web.y > WORLD.height + 60) web.destroy();
      if (scene.time.now > web.lifeUntil) web.destroy();
    });
  }

  function chooseEnemyDirection(scene, enemy, steerHome = false) {
    const homeAngle = Phaser.Math.Angle.Between(enemy.x, enemy.y, enemy.originPoint.x, enemy.originPoint.y);
    enemy.wanderAngle = steerHome
      ? homeAngle + Phaser.Math.FloatBetween(-0.45, 0.45)
      : Phaser.Math.FloatBetween(0, Math.PI * 2);
    enemy.nextTurnAt = scene.time.now + Phaser.Math.Between(900, 2300);
  }

  function enemyOutsideHome(enemy) {
    return Phaser.Math.Distance.Between(enemy.x, enemy.y, enemy.originPoint.x, enemy.originPoint.y) > enemy.range;
  }

  function createOverlays(scene) {
    scene.pointerText = scene.add.text(18, 18, "", {
      fontFamily: "Arial, sans-serif",
      fontSize: "15px",
      color: "#172033",
      backgroundColor: "rgba(255,255,255,.9)",
      padding: { x: 9, y: 6 }
    }).setScrollFactor(0).setDepth(1000);
  }

  function createControls(scene) {
    if (scene.input.keyboard) {
      scene.input.keyboard.addCapture(["W", "A", "S", "D", "UP", "LEFT", "DOWN", "RIGHT"]);
      scene.rollKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }
  }

  function movePlayer(scene) {
    if (el.modal.classList.contains("open")) {
      scene.player.setVelocity(0);
      return;
    }
    const webbed = scene.time.now < (state.webbedUntil || 0);
    const speed = scene.player.rollState === "active" ? 70 : scene.player.rollState === "building" ? 95 : webbed ? 72 : state.moisture < 28 ? 92 : 170;
    const vx = (heldKeys.right ? 1 : 0) - (heldKeys.left ? 1 : 0);
    const vy = (heldKeys.down ? 1 : 0) - (heldKeys.up ? 1 : 0);
    const vec = new Phaser.Math.Vector2(vx, vy);
    if (vec.lengthSq() > 0) {
      vec.normalize().scale(speed);
      scene.player.setVelocity(vec.x, vec.y);
      if (scene.player.rollState !== "active") scene.player.rotation = Phaser.Math.Angle.Between(0, 0, vec.x, vec.y);
      scene.player.setScale(scene.player.rollState === "active" ? 1 : 1.02, scene.player.scaleY);
    } else {
      scene.player.setVelocity(0);
      scene.player.setScale(1, scene.player.scaleY);
    }
  }

  function setRolling(active) {
    if (el.modal.classList.contains("open")) active = false;
    const button = qs("rollBtn");
    if (button) button.classList.toggle("active", active);
    if (!sceneRef || !sceneRef.player) return;
    const player = sceneRef.player;
    player.rollHeld = active;
    if (!active) {
      leaveShell(player);
      return;
    }
    if ((state.shellEnergy || 0) < SHELL_MIN_START) {
      if (!player.shellWarned || sceneRef.time.now - player.shellWarned > 1200) {
        player.shellWarned = sceneRef.time.now;
        addFloatingLabel(sceneRef, player.x, player.y - 38, "Panzer lädt", "#92400e");
      }
      return;
    }
    if (player.rollState === "off" || !player.rollState) {
      player.rollState = "building";
      player.shellReadyAt = sceneRef.time.now + SHELL_BUILD_MS;
      player.setTint(0xd6c2ad);
      addFloatingLabel(sceneRef, player.x, player.y - 38, "Panzer baut sich auf", "#0f766e");
    }
  }

  function syncRollFallback(scene) {
    if (!scene.rollKey) return;
    const active = scene.rollKey.isDown || qs("rollBtn").classList.contains("active");
    if (scene.player && scene.player.rollHeld !== active) setRolling(active);
  }

  function updateShell(scene, dt) {
    const player = scene.player;
    if (!player) return;
    if (!player.rollState) player.rollState = "off";
    if (player.rollHeld && player.rollState === "building" && scene.time.now >= player.shellReadyAt) {
      activateShell(player);
    }
    if (player.rollHeld && player.rollState === "active") {
      state.shellEnergy = Math.max(0, (state.shellEnergy ?? 100) - SHELL_DRAIN_PER_SEC * dt);
      if (state.shellEnergy <= 0) {
        leaveShell(player);
        addFloatingLabel(scene, player.x, player.y - 38, "Panzer erschöpft", "#991b1b");
      }
    } else if (!player.rollHeld && player.rollState !== "active") {
      state.shellEnergy = Math.min(100, (state.shellEnergy ?? 100) + SHELL_RECHARGE_PER_SEC * dt);
    } else if (!player.rollHeld) {
      leaveShell(player);
    }
    const button = qs("rollBtn");
    if (button) {
      button.textContent = player.rollState === "building" ? "Panzer baut auf" : player.rollState === "active" ? "Panzer aktiv" : "Einrollen";
    }
  }

  function activateShell(player) {
    player.rollState = "active";
    player.isRolling = true;
    player.setTexture("asselRolled");
    player.body.setSize(54, 54).setOffset(15, 15);
    player.rotation = 0;
    player.setTint(0xbca18b);
    addFloatingLabel(sceneRef, player.x, player.y - 38, "Panzer aktiv", "#0f766e");
  }

  function leaveShell(player) {
    if (!player || (player.rollState === "off" || !player.rollState)) return;
    player.rollState = "off";
    player.isRolling = false;
    player.shellReadyAt = 0;
    player.setTexture("assel");
    player.body.setSize(54, 34).setOffset(15, 18);
    player.clearTint();
  }

  function keyDirection(key) {
    const map = {
      w: "up",
      arrowup: "up",
      a: "left",
      arrowleft: "left",
      s: "down",
      arrowdown: "down",
      d: "right",
      arrowright: "right"
    };
    return map[key] || null;
  }

  function updateDirectionPointer(scene) {
    if (!scene.pointerText || !scene.player) return;
    const target = nextTarget();
    if (!target || el.modal.classList.contains("open")) {
      scene.pointerText.setText("");
      return;
    }
    const dx = target.x - scene.player.x;
    const dy = target.y - scene.player.y;
    const distance = Math.round(Math.hypot(dx, dy));
    const angle = Phaser.Math.RadToDeg(Math.atan2(dy, dx));
    const arrow = angle > -22.5 && angle <= 22.5 ? "→" :
      angle > 22.5 && angle <= 67.5 ? "↘" :
      angle > 67.5 && angle <= 112.5 ? "↓" :
      angle > 112.5 && angle <= 157.5 ? "↙" :
      angle > 157.5 || angle <= -157.5 ? "←" :
      angle > -157.5 && angle <= -112.5 ? "↖" :
      angle > -112.5 && angle <= -67.5 ? "↑" : "↗";
    scene.pointerText.setText(`${arrow} ${target.label.replace("\n", " ")} · ${distance} m`);
  }

  function updateMoisture(scene, dt) {
    const zone = currentZone(scene.player.x, scene.player.y);
    const deltas = { dry: -3.9, wet: 5.6, leaf: 1.25, rock: -1.2, dark: 2.2 };
    state.moisture = Phaser.Math.Clamp(state.moisture + (deltas[zone.type] || 0) * dt, 0, 100);
    if (zone.label !== scene.zoneText) {
      scene.zoneText = zone.label;
      renderHud();
    }
    if (state.moisture <= 12) {
      state.moisture = 46;
      scene.player.setPosition(SAFE.x, SAFE.y);
      state.x = SAFE.x;
      state.y = SAFE.y;
      showToast("Assel-Alarm: Zu trocken. Die Assel wurde in eine feuchte Sicherheitszone zurückgesetzt.");
    }
    if (!scene.player.isRolling) {
      if (state.moisture < 28) scene.player.setTint(0xc8b8aa);
      else if (state.moisture > 78) scene.player.setTint(0xd9fff2);
      else scene.player.clearTint();
    }
    renderHud();
  }

  function currentZone(x, y) {
    for (let i = zones.length - 1; i >= 0; i--) {
      const zone = zones[i];
      if (x >= zone.x && x <= zone.x + zone.w && y >= zone.y && y <= zone.y + zone.h) return zone;
    }
    return zones[0];
  }

  function collectOrganic(player, pickup) {
    state.collected[pickup.pickupId] = true;
    state.organic = Math.min(DECOMPOSER_SITE.needed, state.organic + 1);
    addFloatingLabel(sceneRef, pickup.x, pickup.y - 18, `${pickupNames[pickup.kind]} gesammelt`, "#166534");
    pickup.destroy();
    saveState();
    renderHud();
    showToast(`${pickupNames[pickup.kind]} gesammelt. Bringe den Rest zum Zersetzungsplatz im Laubbereich.`);
  }

  function touchFalsePickup(player, pickup) {
    if (state.warnedFalse[pickup.pickupId]) return;
    state.warnedFalse[pickup.pickupId] = true;
    saveState();
    addFloatingLabel(sceneRef, pickup.x, pickup.y - 18, "kein Assel-Futter", "#991b1b");
    showToast(`${pickup.label} gehört nicht zum Assel-Abfall-Abbau. Suche abgestorbenes Laub, Holzreste oder Pflanzenreste.`);
  }

  function collectFieldMarker(player, marker) {
    if (state.fieldMarkers[marker.markerId]) return;
    state.fieldMarkers[marker.markerId] = true;
    if (marker.textLabel) marker.textLabel.destroy();
    marker.destroy();
    const count = fieldMarkers.filter((item) => item.mission === marker.mission && state.fieldMarkers[item.id]).length;
    const needed = markerGoals[marker.mission] || 1;
    addFloatingLabel(sceneRef, marker.x, marker.y - 20, `${marker.markerLabel} beobachtet`, "#075985");
    if (count >= needed) {
      unlockFieldwork(marker.mission, `A${marker.mission}: Feldauftrag erledigt. Das Quiz ist an der Station freigeschaltet.`);
    } else {
      showToast(`Beobachtung A${marker.mission}: ${count} / ${needed}. Suche weitere Markierungen.`);
    }
    saveState();
    renderHud();
  }

  function unlockFieldwork(id, message) {
    if (state.fieldwork[id]) return;
    state.fieldwork[id] = true;
    showToast(message);
  }

  function touchEnemy(player, enemy) {
    if (el.modal.classList.contains("open")) return;
    if (enemy.cooldown && sceneRef.time.now < enemy.cooldown) return;
    enemy.cooldown = sceneRef.time.now + 900;
    if (player.rollState === "active") {
      state.enemiesDefeated[enemy.enemyId] = true;
      state.defenseWins = (state.defenseWins || 0) + 1;
      saveState();
      addFloatingLabel(sceneRef, enemy.x, enemy.y - 20, `${enemy.enemyName} vertrieben`, "#0f766e");
      showToast("Assel-Abwehr: Eingerollt schützt der Panzer. Der Gegner zieht sich zurück.");
      if (enemy.nameLabel) enemy.nameLabel.destroy();
      scheduleEnemyRespawn(sceneRef, enemy.enemyId);
      enemy.destroy();
      renderHud();
      return;
    }
    state.moisture = Math.max(35, state.moisture - 18);
    player.setPosition(SAFE.x, SAFE.y);
    state.x = SAFE.x;
    state.y = SAFE.y;
    saveState();
    addFloatingLabel(sceneRef, SAFE.x, SAFE.y - 36, "zur Sicherheitszone", "#991b1b");
    showToast(`${enemy.enemyName}: Bei Gefahr kann sich eine Assel einrollen. Halte Leertaste oder „Einrollen“, wenn du einen Gegner berührst.`);
  }

  function scheduleEnemyRespawn(scene, enemyId) {
    if (!scene) return;
    scene.time.delayedCall(ENEMY_RESPAWN_MS, () => {
      if (!scene.enemyGroup || scene.enemyGroup.getChildren().some((enemy) => enemy.enemyId === enemyId)) return;
      delete state.enemiesDefeated[enemyId];
      saveState();
      spawnEnemy(scene, enemyId);
    });
  }

  function touchWeb(player, web) {
    if (el.modal.classList.contains("open")) return;
    if (player.rollState === "active") {
      addFloatingLabel(sceneRef, web.x, web.y - 16, "Netz abgewehrt", "#0f766e");
      web.destroy();
      return;
    }
    state.webbedUntil = sceneRef.time.now + 2600;
    web.destroy();
    addFloatingLabel(sceneRef, player.x, player.y - 36, "verlangsamt", "#0369a1");
    showToast("Spinnennetz: Die Assel ist kurz verlangsamt. Einrollen schützt auch gegen Netze.");
  }

  function addFloatingLabel(scene, x, y, text, color) {
    if (!scene) return;
    const label = scene.add.text(x, y, text, {
      fontFamily: "Arial, sans-serif",
      fontSize: "14px",
      color,
      backgroundColor: "rgba(255,255,255,.92)",
      padding: { x: 7, y: 4 }
    }).setOrigin(.5).setDepth(1001);
    scene.tweens.add({
      targets: label,
      y: y - 32,
      alpha: 0,
      duration: 1200,
      ease: "Sine.easeOut",
      onComplete: () => label.destroy()
    });
  }

  function touchStation(player, stationSprite) {
    const now = sceneRef ? sceneRef.time.now : Date.now();
    if (el.modal.classList.contains("open") || now - sceneRef.lastStationAt < 900) return;
    if (sceneRef.blockedStationId === stationSprite.stationId) return;
    sceneRef.lastStationAt = now;
    sceneRef.blockedStationId = stationSprite.stationId;
    const id = stationSprite.stationId;
    if (id === 7) {
      if (allMissionsCompleted()) showFinalQuiz();
      else showLockedFinal();
      return;
    }
    if (!missionUnlocked(id)) {
      showLockedMission(id);
      return;
    }
    startMission(id);
  }

  function clearStationBlock(scene) {
    if (!scene.blockedStationId || !scene.player) return;
    const station = stations.find((item) => item.id === scene.blockedStationId);
    if (!station) {
      scene.blockedStationId = null;
      return;
    }
    const distance = Phaser.Math.Distance.Between(scene.player.x, scene.player.y, station.x, station.y);
    if (distance > 115) scene.blockedStationId = null;
  }

  function missionUnlocked(id) {
    if (id <= 1) return true;
    const previous = id - 1;
    return Boolean(state.completed[previous] && state.screenshots[previous]);
  }

  function showLockedMission(id) {
    const previous = missions.find((mission) => mission.id === id - 1);
    if (previous && state.completed[previous.id] && !state.screenshots[previous.id]) {
      showScreenshotStop(previous.id);
      return;
    }
    openModal(`A${id} noch gesperrt`, "Bearbeite die Assel-Aufträge der Reihe nach.", `
      <div class="task-box badbox">Zuerst müssen A${id - 1}, Quiz und Screenshot-Stopp abgeschlossen sein.</div>
      <button onclick="AsselGame.closeModal()">Zurück auf die Map</button>
    `);
  }

  function startMission(id) {
    if (state.completed[id]) {
      if (!state.screenshots[id]) showScreenshotStop(id);
      else showToast(`Assel-Akte A${id} ist erledigt und der Screenshot ist gesichert.`);
      return;
    }
    if (!state.fieldwork[id]) {
      showFieldworkInstruction(id);
      return;
    }
    const handlers = {
      1: missionHabitat,
      2: missionDryness,
      3: missionDecomposer,
      4: missionAnatomy,
      5: missionClassification,
      6: missionEcology
    };
    handlers[id]();
  }

  function showFieldworkInstruction(id) {
    const collected = fieldMarkers.filter((item) => item.mission === id && state.fieldMarkers[item.id]).length;
    const needed = markerGoals[id] || DECOMPOSER_SITE.needed;
    const bodies = {
      1: `Sammle im dunklen Versteck die drei Beobachtungen: Dunkel, Feucht und Schutz. Danach ist das Quiz an A1 freigeschaltet.`,
      2: `Sammle in der trockenen Zone die drei Beobachtungen: Trocken, Anzeige und Alarm. Beobachte dabei die Feuchtigkeit der Assel.`,
      3: `Sammle abgestorbenes Material und liefere ${DECOMPOSER_SITE.needed} Reste am Zersetzungsplatz im Laubbereich ab. Erst wenn die Pflanze gewachsen ist, wird das Quiz an A3 freigeschaltet.`,
      4: `Finde im steinigen Bereich die Körperbau-Markierungen: Panzer, Segmente, Fühler und Beine.`,
      5: `Sammle im Arten-Archiv die Markierungen Krebstier, Gliederfüßer und kein Insekt.`,
      6: `Sammle bei den Acker-Abhängigkeiten die Markierungen Boden, Nahrungskette und Stoffkreislauf.`
    };
    const progress = id === 3 ? `${Math.min(state.deliveredOrganic || 0, DECOMPOSER_SITE.needed)} / ${DECOMPOSER_SITE.needed}` : `${collected} / ${needed}`;
    openModal(`A${id}: Feldauftrag zuerst`, "Erledige den Auftrag direkt auf der Map. Danach öffnet sich das Quiz.", `
      <div class="task-box akte">${bodies[id]}</div>
      <div class="task-box">Fortschritt: <strong>${progress}</strong></div>
      <button onclick="AsselGame.closeModal()">Zurück auf die Map</button>
    `);
  }

  function renderHud() {
    if (!el.progressGrid) return;
    el.progressGrid.innerHTML = missions.map((mission) => {
      const done = Boolean(state.completed[mission.id]);
      const shot = Boolean(state.screenshots[mission.id]);
      const field = Boolean(state.fieldwork[mission.id]);
      const label = !field ? "Feldauftrag offen" : !done ? "Quiz freigeschaltet" : shot ? "Screenshot gesichert" : "Screenshot offen";
      return `<div class="progress-item ${done && shot ? "done" : ""}">
        <strong>${mission.code} · ${mission.short}</strong>
        <span>${label}</span>
      </div>`;
    }).join("");

    const shots = missions.filter((m) => state.screenshots[m.id]).length;
    const zone = sceneRef && sceneRef.player ? currentZone(sceneRef.player.x, sceneRef.player.y) : zones[1];
    const pendingShot = pendingScreenshotMission();
    const nextOpen = missions.find((mission) => !state.completed[mission.id]);
    el.activeMission.textContent = pendingShot ? `${pendingShot.code} Screenshot` : nextOpen ? nextOpen.code : "Abschlussprüfung";
    el.organicCount.textContent = `${state.organic || 0} dabei · ${Math.min(state.deliveredOrganic || 0, DECOMPOSER_SITE.needed)} / ${DECOMPOSER_SITE.needed}`;
    el.defenseCount.textContent = `${state.defenseWins || 0} vertrieben`;
    const shellEnergy = Math.round(state.shellEnergy ?? 100);
    const rollState = sceneRef && sceneRef.player ? sceneRef.player.rollState : "off";
    el.shellText.textContent = rollState === "building" ? "baut auf" : rollState === "active" ? "aktiv" : shellEnergy < SHELL_MIN_START ? "lädt" : "bereit";
    el.shellBar.style.width = `${shellEnergy}%`;
    el.screenshotCount.textContent = `${shots} / 6`;
    el.moistureText.textContent = `${Math.round(state.moisture)} %`;
    el.moistureBar.style.width = `${Math.round(state.moisture)}%`;
    el.contextHint.textContent = hintFor(zone);
    const next = nextTarget();
    el.wayHint.textContent = next ? `Nächstes Ziel: ${next.label.replace("\n", " ")}. Ereignisse: ${state.researchEvents || 0}` : `Alle Pflichtstationen erledigt. Ereignisse: ${state.researchEvents || 0}`;
    drawMiniMap();
    updateStationLabels();
  }

  function pendingScreenshotMission() {
    return missions.find((mission) => state.completed[mission.id] && !state.screenshots[mission.id]);
  }

  function nextTarget() {
    const pendingShot = pendingScreenshotMission();
    if (pendingShot) {
      const station = stations.find((item) => item.id === pendingShot.id);
      return { ...station, label: `${stationInfo[pendingShot.id].label}\nScreenshot` };
    }
    const nextMission = missions.find((mission) => missionUnlocked(mission.id) && !state.completed[mission.id]);
    if (nextMission) {
      const station = stations.find((item) => item.id === nextMission.id);
      return { ...station, label: stationInfo[nextMission.id].label };
    }
    return { ...stations.find((item) => item.id === 7), label: stationInfo[7].label };
  }

  function drawMiniMap() {
    if (!el.miniMap) return;
    const canvas = el.miniMap;
    const ctx = canvas.getContext("2d");
    const sx = canvas.width / WORLD.width;
    const sy = canvas.height / WORLD.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#dfbd80";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    zones.slice(1).forEach((zone) => {
      const colors = { wet: "#87cfbf", leaf: "#93b55b", rock: "#aab6c4", dark: "#4c463f" };
      ctx.fillStyle = colors[zone.type] || "#dfbd80";
      ctx.fillRect(zone.x * sx, zone.y * sy, zone.w * sx, zone.h * sy);
    });
    ctx.strokeStyle = "rgba(23,32,51,.22)";
    ctx.lineWidth = 1;
    ctx.strokeRect(.5, .5, canvas.width - 1, canvas.height - 1);
    stations.forEach((station) => {
      const done = station.id !== 7 && state.completed[station.id] && state.screenshots[station.id];
      const final = station.id === 7;
      ctx.fillStyle = final ? "#7c3aed" : done ? "#16a34a" : "#111827";
      ctx.beginPath();
      ctx.arc(station.x * sx, station.y * sy, final ? 5 : 4, 0, Math.PI * 2);
      ctx.fill();
    });
    const px = (sceneRef && sceneRef.player ? sceneRef.player.x : state.x) * sx;
    const py = (sceneRef && sceneRef.player ? sceneRef.player.y : state.y) * sy;
    ctx.fillStyle = "#f59e0b";
    ctx.strokeStyle = "#172033";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(px, py, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  function hintFor(zone) {
    if (!state.started) return "Drücke „Spiel starten“. Laufe danach mit WASD zu A1 bis A6.";
    if (state.moisture < 28) return "Assel-Alarm: Suche feuchte Erde oder ein dunkles Versteck, sonst wird die Assel langsam.";
    const pendingShot = pendingScreenshotMission();
    if (pendingShot) return `${zone.label}: Sichere den Screenshot-Stopp für ${pendingShot.code}, dann geht es weiter.`;
    const next = missions.find((mission) => !state.completed[mission.id]);
    if (sceneRef && sceneRef.time && sceneRef.time.now < (state.webbedUntil || 0)) return "Spinnennetz: Die Assel ist kurz verlangsamt. Suche Deckung oder rolle dich ein.";
    if (next && !state.fieldwork[next.id]) return `${zone.label}: Erledige den Feldauftrag für ${next.code} auf der Map.`;
    if (next) return `${zone.label}: ${next.code}-Quiz ist freigeschaltet. Gehe zur Station.`;
    return `${zone.label}: Alle Quiz-Aufträge erledigt. Sichere offene Screenshots und gehe zum Abschluss.`;
  }

  function updateStationLabels() {
    if (!sceneRef || !sceneRef.stationSprites) return;
    sceneRef.stationSprites.forEach((sprite) => {
      if (sprite.stationId === 7) return;
      const done = Boolean(state.completed[sprite.stationId] && state.screenshots[sprite.stationId]);
      sprite.setTexture(done ? "stationDone" : "station");
    });
  }

  function allMissionsCompleted() {
    return missions.every((mission) => state.completed[mission.id] && state.screenshots[mission.id]);
  }

  function missionHabitat() {
    openModal(missions[0].name, "Station im dunklen, geschützten Bodenbereich.", `
      <div class="task-box">Asseln besitzen keinen Lebensraum wie eine trockene Wüstenoberfläche. Sie sind auf Feuchtigkeit angewiesen und suchen Schutz vor Licht, Wärme und Austrocknung.</div>
      ${radioQuestion("q1", "Warum bevorzugen Asseln feuchte, dunkle und geschützte Orte?", [
        ["a", "Dort verlieren sie weniger Wasser und finden Schutz vor Austrocknung."],
        ["b", "Dort können sie besser fliegen."],
        ["c", "Dort wachsen ihnen Blüten."]
      ])}
      ${radioQuestion("q2", "Welche Beobachtung passt zum Spiel?", [
        ["a", "Dunkle und feuchte Zonen stabilisieren die Feuchtigkeit der Assel."],
        ["b", "Trockene Erde ist der beste Aufenthaltsort."],
        ["c", "Licht und Trockenheit spielen keine Rolle."]
      ])}
      <button onclick="AsselGame.checkRadioMission(1,{q1:'a',q2:'a'})">Antwort prüfen</button>
      <div id="feedback" class="feedback"></div>
    `);
  }

  function missionDryness() {
    const ok = state.moisture >= 45;
    openModal(missions[1].name, "Beobachte die Feuchtigkeitsanzeige deiner Assel.", `
      <div class="task-box ${ok ? "goodbox" : "badbox"}">
        Aktuelle Feuchtigkeit: <strong>${Math.round(state.moisture)} %</strong><br>
        ${ok ? "Die Assel ist feucht genug für die Analyse." : "Die Assel ist zu trocken. Laufe zuerst über eine feuchte Zone und komme dann zurück."}
      </div>
      ${ok ? `
        ${radioQuestion("q1", "Warum ist Austrocknung für Asseln besonders problematisch?", [
          ["a", "Sie sind an feuchte Lebensräume angepasst und verlieren in trockener Umgebung zu viel Wasser."],
          ["b", "Sie können bei Trockenheit nicht sehen."],
          ["c", "Sie wachsen nur, wenn die Sonne direkt auf ihren Panzer scheint."]
        ])}
        ${radioQuestion("q2", "Welche Spielbeobachtung passt zur Biologie?", [
          ["a", "Trockene Zonen senken die Feuchtigkeit, feuchte Zonen helfen der Assel."],
          ["b", "Trockene Zonen sind ideal, feuchte Zonen sind gefährlich."],
          ["c", "Feuchtigkeit spielt für den Lebensraum keine Rolle."]
        ])}
        <button onclick="AsselGame.checkRadioMission(2,{q1:'a',q2:'a'})">Antwort prüfen</button>
        <div id="feedback" class="feedback"></div>
      ` : `<button onclick="AsselGame.closeModal()">Feuchte Zone suchen</button>`}
    `);
  }

  function missionDecomposer() {
    const carried = state.organic || 0;
    const delivered = Math.min(state.deliveredOrganic || 0, DECOMPOSER_SITE.needed);
    const ready = delivered >= DECOMPOSER_SITE.needed;
    openModal(missions[2].name, "Sichere den Assel-Abfall-Abbau.", `
      <div class="task-box ${ready ? "goodbox" : "akte"}">
        Zersetzungsplatz: <strong>${delivered} / ${DECOMPOSER_SITE.needed}</strong> Reste abgeliefert<br>
        Getragen: <strong>${carried}</strong> Rest${carried === 1 ? "" : "e"}
      </div>
      ${ready ? `
        <div class="task-box goodbox">
          Der Zersetzungsplatz ist fertig. Beantworte die Fachfragen, um die A3-Akte freizuschalten.
        </div>
        ${radioQuestion("q1", "Welche Aufgabe haben Asseln beim Abfall-Abbau?", [
          ["a", "Sie helfen, abgestorbene organische Reste zu zerkleinern und in den Stoffkreislauf einzubinden."],
          ["b", "Sie machen aus Steinen neue Blätter."],
          ["c", "Sie vermeiden jeden Kontakt mit Laub und Holz."]
        ])}
        ${radioQuestion("q2", "Warum wächst am Zersetzungsplatz im Spiel eine Pflanze?", [
          ["a", "Sie zeigt, dass beim Abbau Nährstoffe wieder für Pflanzen verfügbar werden können."],
          ["b", "Sie zeigt, dass Asseln Photosynthese betreiben."],
          ["c", "Sie zeigt, dass Plastik besonders gutes Assel-Futter ist."]
        ])}
        <button onclick="AsselGame.checkRadioMission(3,{q1:'a',q2:'a'})">Antwort prüfen</button>
        <div id="feedback" class="feedback"></div>
      ` : ""}
      <div class="task-box">
        Sammle abgestorbenes Laub, Holzreste und Pflanzenreste. Bringe sie zum Zersetzungsplatz im Laubbereich. Dort wächst die Pflanze als Zeichen dafür, dass Stoffe im Kreislauf weitergegeben werden.
      </div>
      <div class="task-box goodbox">
        Wenn der Bereich fertig ist, erscheint der Screenshot-Hinweis direkt über dem Zersetzungsplatz im Spiel.
      </div>
      <button onclick="AsselGame.closeModal()">Zurück zum Zersetzungsplatz</button>
    `);
  }

  function missionAnatomy() {
    openModal(missions[3].name, "Ordne Merkmale des Körperbaus richtig zu.", `
      <div class="anatomy-panel">
        ${anatomyDiagram()}
        <div>
          <div class="task-box">Asseln gehören zu den Gliederfüßern. Ihr Körper ist gegliedert, besitzt einen schützenden Panzer, Fühler zur Orientierung und mehrere Beinpaare zur Fortbewegung.</div>
          <div class="match-row"><strong>Panzer</strong><select id="m_panzer"><option value="">auswählen</option><option value="schutz">schützt den Körper und wirkt wie ein Außenskelett</option><option value="flug">dient zum Fliegen</option><option value="wurzel">nimmt Wasser aus Erde auf</option></select></div>
          <div class="match-row"><strong>Segmente</strong><select id="m_segmente"><option value="">auswählen</option><option value="gliederung">zeigen die Gliederung des Körpers</option><option value="photosynthese">machen Photosynthese</option><option value="stachel">spritzen Gift</option></select></div>
          <div class="match-row"><strong>Fühler</strong><select id="m_fuehler"><option value="">auswählen</option><option value="orientierung">helfen bei Orientierung und Wahrnehmung</option><option value="atmung">ersetzen die Lunge vollständig</option><option value="verdauung">zerkleinern Laub im Magen</option></select></div>
          <div class="match-row"><strong>Beine</strong><select id="m_beine"><option value="">auswählen</option><option value="bewegung">ermöglichen die Fortbewegung</option><option value="bluete">bilden Blütenstaub</option><option value="licht">erzeugen Licht</option></select></div>
          <button onclick="AsselGame.checkAnatomy()">Zuordnung prüfen</button>
          <div id="feedback" class="feedback"></div>
        </div>
      </div>
    `);
  }

  function anatomyDiagram() {
    return `<svg class="anatomy-diagram" viewBox="0 0 360 260" role="img" aria-label="Assel mit markiertem Panzer, Segmenten, Fühlern und Beinen">
      <rect x="0" y="0" width="360" height="260" rx="18" fill="#f8fafc"/>
      <g stroke="#2b1e17" stroke-width="5" stroke-linecap="round">
        <path d="M250 116 C282 88 303 79 328 71"/>
        <path d="M250 147 C285 179 306 190 330 203"/>
        <path d="M87 178 L66 212 M116 184 L100 225 M146 188 L139 232 M178 188 L184 232 M209 184 L224 225 M238 176 L263 210"/>
        <path d="M87 82 L66 50 M116 75 L101 38 M146 70 L140 30 M178 70 L184 30 M209 75 L226 38 M238 84 L264 52"/>
      </g>
      <ellipse cx="164" cy="130" rx="116" ry="74" fill="#5d4030" stroke="#2b1e17" stroke-width="6"/>
      <ellipse cx="248" cy="130" rx="43" ry="54" fill="#6f4d3a" stroke="#2b1e17" stroke-width="5"/>
      <g stroke="#dcc6b4" stroke-width="5" opacity=".85">
        <path d="M82 69 C90 99 90 159 81 190"/>
        <path d="M112 58 C121 96 121 163 112 201"/>
        <path d="M144 55 C151 95 151 165 144 204"/>
        <path d="M176 56 C181 98 181 162 176 203"/>
        <path d="M208 62 C211 96 211 164 208 197"/>
        <path d="M236 82 C237 105 237 154 236 178"/>
      </g>
      <circle cx="268" cy="115" r="5" fill="#111827"/>
      <circle cx="268" cy="146" r="5" fill="#111827"/>
      <g font-family="Arial, sans-serif" font-size="15" font-weight="700" fill="#172033">
        <text x="26" y="29">Segmente</text>
        <line x1="97" y1="35" x2="130" y2="75" stroke="#0ea5e9" stroke-width="3"/>
        <text x="205" y="31">Fühler</text>
        <line x1="252" y1="37" x2="306" y2="77" stroke="#0ea5e9" stroke-width="3"/>
        <text x="25" y="245">Beine</text>
        <line x1="73" y1="235" x2="111" y2="188" stroke="#0ea5e9" stroke-width="3"/>
        <text x="226" y="244">Panzer</text>
        <line x1="257" y1="225" x2="203" y2="155" stroke="#0ea5e9" stroke-width="3"/>
      </g>
    </svg>`;
  }

  function missionClassification() {
    openModal(missions[4].name, "Öffne das Assel-Arten-Archiv.", `
      <div class="task-box">Viele halten Asseln fälschlich für Insekten. Ordne sie fachlich korrekt ein.</div>
      ${radioQuestion("q1", "Zu welcher größeren Gruppe gehören Asseln?", [
        ["a", "zu den Krebstieren innerhalb der Gliederfüßer"],
        ["b", "zu den Säugetieren"],
        ["c", "zu den Weichtieren wie Schnecken"]
      ])}
      ${radioQuestion("q2", "Warum sind Asseln keine Insekten?", [
        ["a", "Insekten haben typischerweise 6 Beine; Asseln haben mehr Beinpaare und gehören zu den Krebstieren."],
        ["b", "Asseln haben keine Augen, deshalb können sie keine Insekten sein."],
        ["c", "Alle Tiere im Boden sind automatisch Würmer."]
      ])}
      ${radioQuestion("q3", "Welche Formulierung ist für dein Protokoll am besten?", [
        ["a", "Die Assel ist ein kleines Bodenmonster."],
        ["b", "Die Assel ist ein Gliederfüßer und zählt zu den Krebstieren, nicht zu den Insekten."],
        ["c", "Die Assel ist eine Pflanzenart."]
      ])}
      <button onclick="AsselGame.checkRadioMission(5,{q1:'a',q2:'a',q3:'b'})">Antwort prüfen</button>
      <div id="feedback" class="feedback"></div>
    `);
  }

  function missionEcology() {
    openModal(missions[5].name, "Decke die Acker-Abhängigkeiten auf.", `
      <div class="task-box">Asseln sind klein, aber für den Boden nicht unwichtig. Verbinde Spielhandlung und ökologische Bedeutung.</div>
      ${radioQuestion("q1", "Welche ökologische Rolle passt am besten?", [
        ["a", "Asseln helfen beim Zersetzen organischer Reste und machen Stoffe für den Boden wieder verfügbar."],
        ["b", "Asseln zerstören grundsätzlich jeden Boden und haben keine Funktion."],
        ["c", "Asseln sind Produzenten, weil sie Sonnenlicht in Zucker umwandeln."]
      ])}
      ${radioQuestion("q2", "Welche Beziehung ist sinnvoll?", [
        ["a", "Asseln können Nahrung für andere Tiere sein und sind Teil von Nahrungsketten."],
        ["b", "Asseln haben keine Feinde und kommen in keiner Nahrungskette vor."],
        ["c", "Asseln leben ausschließlich im Wasser und nie im Boden."]
      ])}
      ${radioQuestion("q3", "Was wäre eine passende Schlussfolgerung?", [
        ["a", "Auch kleine Bodenlebewesen können eine wichtige Bedeutung für Stoffkreisläufe haben."],
        ["b", "Nur große Tiere haben eine ökologische Bedeutung."],
        ["c", "Stoffkreisläufe haben mit Lebewesen nichts zu tun."]
      ])}
      <button onclick="AsselGame.checkRadioMission(6,{q1:'a',q2:'a',q3:'a'})">Antwort prüfen</button>
      <div id="feedback" class="feedback"></div>
    `);
  }

  function radioQuestion(name, title, options) {
    return `<div class="question"><div class="question-title">${title}</div>${options.map((option) => `<label class="option"><input type="radio" name="${name}" value="${option[0]}"><span>${option[1]}</span></label>`).join("")}</div>`;
  }

  function checkRadioMission(id, answers) {
    let ok = true;
    Object.keys(answers).forEach((q) => {
      const chosen = el.modalBody.querySelector(`input[name="${q}"]:checked`);
      if (!chosen || chosen.value !== answers[q]) ok = false;
    });
    const feedback = qs("feedback");
    if (ok) {
      feedback.className = "feedback ok";
      feedback.textContent = "Richtig. Die Assel-Akte wird freigeschaltet.";
      setTimeout(() => completeMission(id), 650);
    } else {
      feedback.className = "feedback no";
      feedback.textContent = "Noch nicht richtig. Lies die Aussagen genau und prüfe die Fachbegriffe.";
    }
  }

  function checkAnatomy() {
    const ok = qs("m_panzer").value === "schutz" && qs("m_segmente").value === "gliederung" && qs("m_fuehler").value === "orientierung" && qs("m_beine").value === "bewegung";
    const feedback = qs("feedback");
    if (ok) {
      feedback.className = "feedback ok";
      feedback.textContent = "Richtig zugeordnet. Die Anatomie-Analyse ist abgeschlossen.";
      setTimeout(() => completeMission(4), 650);
    } else {
      feedback.className = "feedback no";
      feedback.textContent = "Noch nicht richtig. Achte darauf, welche Funktion jedes Körperteil wirklich hat.";
    }
  }

  function completeMission(id) {
    state.completed[id] = true;
    saveState();
    renderHud();
    if (id === 3) {
      renderDecomposerSite(sceneRef);
      showScreenshotStop(3);
      showToast("A3-Quiz erledigt. Sichere den Screenshot, dann wird A4 freigeschaltet.");
    } else {
      showScreenshotStop(id);
    }
  }

  function showScreenshotStop(id) {
    const mission = missions.find((item) => item.id === id);
    openModal(`Assel-Akte freigeschaltet: ${mission.short}`, "Screenshot-Stopp für dein Forschungsprotokoll.", `
      <div class="task-box akte">
        <strong>Assel-Akte freigeschaltet. Mache jetzt einen Screenshot und füge ihn in dein Forschungsprotokoll ein.</strong>
      </div>
      <div class="task-box">
        <strong>Was soll unter den Screenshot?</strong><br>
        Schreibe 2-4 erklärende Sätze: ${mission.prompt}
      </div>
      <div class="task-box goodbox">
        <strong>Guter Satzanfang:</strong><br>
        „In diesem Auftrag habe ich herausgefunden, dass ...“
      </div>
      <button class="good" onclick="AsselGame.markScreenshot(${id})">Screenshot gesichert - weiter</button>
    `, true);
  }

  function markScreenshot(id) {
    state.screenshots[id] = true;
    modalLocked = false;
    saveState();
    refreshFieldMarkers();
    renderHud();
    closeModal();
    showToast(`Screenshot-Stopp A${id} abgehakt. Weiter zum nächsten Assel-Auftrag.`);
  }

  function refreshFieldMarkers() {
    if (!sceneRef) return;
    if (!sceneRef.fieldMarkerGroup) {
      createFieldMarkers(sceneRef);
      return;
    }
    sceneRef.fieldMarkerGroup.getChildren().slice().forEach((marker) => {
      if (marker.textLabel) marker.textLabel.destroy();
      marker.destroy();
    });
    createFieldMarkers(sceneRef);
  }

  function showLockedFinal() {
    const missing = missions
      .filter((mission) => !state.completed[mission.id] || !state.screenshots[mission.id])
      .map((mission) => state.completed[mission.id] ? `${mission.code} Screenshot` : mission.code)
      .join(", ");
    openModal("Assel-Abschluss noch gesperrt", "Du brauchst zuerst alle sechs Assel-Akten und Screenshot-Stopps.", `
      <div class="task-box badbox">Noch offen: <strong>${missing}</strong></div>
      <button onclick="AsselGame.closeModal()">Zurück ins Assel-Areal</button>
    `);
  }

  function showFinalQuiz() {
    if (state.quizScore !== null) {
      showFinalResult(state.quizScore);
      return;
    }
    openModal("Assel-Abschlussprüfung", "Beantworte die Fragen. Danach erhältst du deine Abschluss-Akte.", `
      <div class="task-box">Du hast alle Assel-Aufträge erledigt. Für die Abschluss-Akte brauchst du mindestens 6 von 8 Punkten.</div>
      ${quiz.map((item, index) => radioQuestion(`quiz${index}`, `${index + 1}. ${item.q}`, item.o)).join("")}
      <button class="warning" onclick="AsselGame.checkFinalQuiz()">Abschlussprüfung auswerten</button>
      <div id="feedback" class="feedback"></div>
    `);
  }

  function checkFinalQuiz() {
    let score = 0;
    quiz.forEach((item, index) => {
      const chosen = el.modalBody.querySelector(`input[name="quiz${index}"]:checked`);
      if (chosen && chosen.value === item.a) score++;
    });
    const feedback = qs("feedback");
    if (score >= 6) {
      state.quizScore = score;
      saveState();
      renderHud();
      showFinalResult(score);
    } else {
      feedback.className = "feedback no";
      feedback.textContent = `Du hast ${score} von ${quiz.length} Punkten. Für die Abschluss-Akte brauchst du mindestens 6 Punkte. Prüfe die Fachbegriffe noch einmal.`;
    }
  }

  function showFinalResult(score) {
    openModal("Assel-Abschluss-Akte", "Dein Assel-Abenteuer ist abgeschlossen.", `
      <div class="task-box goodbox">
        Ergebnis: <strong>${score} / ${quiz.length}</strong><br>
        Du hast alle Pflicht-Aufträge abgeschlossen. Ergänze jetzt dein Forschungsprotokoll und schreibe dein Fazit.
      </div>
      <div class="task-box akte">
        <strong>Freiwilliger Zusatz-Screenshot:</strong><br>
        Mache einen Screenshot von dieser Abschluss-Akte und füge ihn ans Ende deines Dokuments ein.
      </div>
      <div class="task-box">
        <strong>Fazit-Frage:</strong><br>
        Was weißt du jetzt über Asseln, ihren Lebensraum und ihre Bedeutung für den Boden?
      </div>
      <button onclick="AsselGame.closeModal()">Abschluss übernehmen</button>
      <button class="secondary" onclick="AsselGame.showProtocol()">Protokoll-Vorlage öffnen</button>
    `);
  }

  function showProtocol() {
    closeModal(true);
    el.protocolSection.hidden = false;
    el.protocolSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function showHelp() {
    openModal("Assel-Auftrag für Schüler:innen", "Erstelle ein digitales Forschungsprotokoll zum Spiel.", `
      <div class="task-box">
        <strong>Arbeitsauftrag:</strong>
        <ol class="mission-list">
          <li>Spiele „Assel-Abenteuer: Aufklärung im Acker“.</li>
          <li>Erledige alle sechs Assel-Aufträge.</li>
          <li>Mache bei jedem Screenshot-Stopp einen Screenshot.</li>
          <li>Füge die Screenshots in ein Dokument ein.</li>
          <li>Schreibe zu jedem Screenshot 2-4 erklärende Sätze.</li>
          <li>Wenn ein Gegner auftaucht, rolle dich mit der Leertaste oder dem Button „Einrollen“ zusammen. Das zeigt die Schutzreaktion vieler Asseln.</li>
          <li>Achte auf Spezialgegner: Spinnen schießen Netze, Steinläufer sprinten, Ameisen alarmieren andere Gegner und Raubmilben trocknen die Assel schneller aus.</li>
          <li>Verwende Fachbegriffe: Krebstier, Gliederfüßer, Destruent/Zersetzer, Stoffkreislauf, Feuchtigkeit, Austrocknung, Lebensraum.</li>
        </ol>
      </div>
      <button onclick="AsselGame.showProtocol()">Protokoll-Vorlage öffnen</button>
    `);
  }

  function resetGame() {
    if (!confirm("Spielstand wirklich zurücksetzen?")) return;
    stopPlayerInput();
    closeModal(true);
    state = defaultState();
    saveState();
    if (game) {
      game.destroy(true);
      game = null;
      sceneRef = null;
      qs("gameCanvas").innerHTML = "";
    }
    el.startScreen.classList.remove("hidden");
    el.protocolSection.hidden = true;
    renderHud();
    showToast("Spielstand zurückgesetzt.");
  }

  async function toggleFullscreen() {
    const target = document.querySelector(".game-shell");
    try {
      if (!document.fullscreenElement) {
        if (target.requestFullscreen) await target.requestFullscreen();
        document.body.classList.add("game-fullscreen");
        qs("fullscreenBtn").textContent = "Vollbild beenden";
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      document.body.classList.toggle("game-fullscreen");
      qs("fullscreenBtn").textContent = document.body.classList.contains("game-fullscreen") ? "Vollbild beenden" : "Vollbild";
    }
    setTimeout(resizeGame, 120);
  }

  function syncFullscreenState() {
    const active = Boolean(document.fullscreenElement);
    document.body.classList.toggle("game-fullscreen", active);
    qs("fullscreenBtn").textContent = active ? "Vollbild beenden" : "Vollbild";
    setTimeout(resizeGame, 120);
  }

  function resizeGame() {
    if (game && game.scale) game.scale.refresh();
  }

  async function copyProtocol() {
    try {
      await navigator.clipboard.writeText(protocolText());
      showToast("Protokoll-Vorlage kopiert.");
    } catch (error) {
      el.protocolTemplate.focus();
      el.protocolTemplate.select();
      document.execCommand("copy");
      showToast("Protokoll-Vorlage markiert/kopiert.");
    }
  }

  function openModal(title, lead, body, locked = false) {
    stopPlayerInput();
    modalLocked = locked;
    el.modalTitle.textContent = title;
    el.modalLead.textContent = lead;
    el.modalBody.innerHTML = body;
    qs("closeModal").disabled = locked;
    el.modal.classList.add("open");
  }

  function closeModal(force = false) {
    if (modalLocked && !force) {
      showToast("Screenshot-Stopp: Bitte erst den Screenshot sichern.");
      return;
    }
    modalLocked = false;
    qs("closeModal").disabled = false;
    el.modal.classList.remove("open");
  }

  function showToast(message) {
    el.toast.textContent = message;
    el.toast.classList.add("show");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => el.toast.classList.remove("show"), 3200);
  }

  function protocolText() {
    return `Mein Assel-Forschungsprotokoll

Name: ____________________________
Klasse: ___________________________
Datum: ____________________________

Auftrag: Spiele die Lernapp „Assel-Abenteuer: Aufklärung im Acker“. Füge zu jedem Assel-Auftrag einen Screenshot ein und schreibe darunter 2-4 erklärende Sätze.

Zusatzbeobachtung: Wenn du auf Gegner triffst, kann sich die Assel einrollen. Beschreibe kurz, wie diese Schutzreaktion mit Panzer und Körperbau zusammenhängt.

Screenshot 1 - Assel-Auftrag: Aufenthaltsort analysieren
[Füge hier deinen Screenshot ein.]
Erklärung: Warum bevorzugen Asseln feuchte, dunkle und geschützte Orte?


Screenshot 2 - Assel-Auftrag: Austrocknungs-Alarm
[Füge hier deinen Screenshot ein.]
Erklärung: Warum ist Austrocknung für Asseln gefährlich? Was hast du an der Feuchtigkeitsanzeige beobachtet?


Screenshot 3 - Assel-Auftrag: Abfall-Abbau sichern
[Füge hier deinen Screenshot ein.]
Erklärung: Welche Rolle haben Asseln als Zersetzer/Destruenten im Stoffkreislauf?


Screenshot 4 - Assel-Auftrag: Anatomie-Analyse
[Füge hier deinen Screenshot ein.]
Erklärung: Welche Merkmale des Körperbaus hast du zugeordnet? Verwende Fachbegriffe.


Screenshot 5 - Assel-Auftrag: Arten-Archiv öffnen
[Füge hier deinen Screenshot ein.]
Erklärung: Warum sind Asseln keine Insekten, sondern Krebstiere?


Screenshot 6 - Assel-Auftrag: Acker-Abhängigkeiten aufdecken
[Füge hier deinen Screenshot ein.]
Erklärung: Warum sind Asseln für Boden, Nahrungskette und Stoffkreislauf wichtig?


Freiwilliger Zusatz-Screenshot - Assel-Abschlussprüfung
[Füge hier deinen Screenshot ein.]

Fazit:
Schreibe mindestens 3 Sätze. Was weißt du jetzt über Asseln, ihren Lebensraum und ihre Bedeutung in der Natur?
`;
  }

  window.AsselGame = {
    closeModal,
    checkRadioMission,
    checkAnatomy,
    markScreenshot,
    checkFinalQuiz,
    showProtocol,
    debugScene: () => sceneRef,
    debugState: () => state
  };

  initDom();
})();
