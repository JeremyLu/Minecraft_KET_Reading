/**
 * Minecraft KET Reading — Master Index
 *
 * How to add a new exercise:
 * 1. Create the .js file under data/exercises/<category>/
 * 2. Add an add() entry below with metadata + file path
 * 3. Done! The auto-loader at the bottom picks it up — no <script> tag needed in index.html!
 */

MINECRAFT_KET_INDEX = (function () {
  var index = [];

  function add(categoryId, categoryZh, id, title, type, file, tags) {
    index.push({
      category: categoryId,
      categoryZh: categoryZh,
      id: id,
      title: title,
      type: type,
      file: file,
      tags: tags || [],
    });
  }

  // ================================================================
  //  EXERCISE REGISTRY  (add new entries below)
  // ================================================================

  add(
    "mobs-creatures",   // category folder name
    "生物图鉴",          // Chinese label
    "mc-ket-001",       // unique id
    "The Creeper Surprise", // title
    "Part 3",           // KET question type
    "data/exercises/mobs-creatures/ex-001.js", // file path
    ["creeper", "怪物", "生存", "past-simple"]  // tags
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-002", "The First Night Warning", "Part 1",
    "data/exercises/survival-basics/ex-002.js",
    ["first-night", "危险", "告示牌", "祈使句"]
  );

  add(
    "mobs-creatures", "生物图鉴",
    "mc-ket-003", "Match the Right Tool", "Part 2",
    "data/exercises/mobs-creatures/ex-003.js",
    ["tools", "武器", "匹配", "simple-present"]
  );

  add(
    "mobs-creatures", "生物图鉴",
    "mc-ket-039", "The Piglin's Gold", "Part 3",
    "data/exercises/mobs-creatures/ex-039.js",
    ["piglin", "猪灵", "nether", "barter", "下界"]
  );

  add(
    "mobs-creatures", "生物图鉴",
    "mc-ket-040", "The Night Phantom", "Part 4",
    "data/exercises/mobs-creatures/ex-040.js",
    ["phantom", "幻翼", "sleep", "membrane", "情态动词"]
  );

  add(
    "mobs-creatures", "生物图鉴",
    "mc-ket-041", "The Silent Enderman", "Part 5",
    "data/exercises/mobs-creatures/ex-041.js",
    ["enderman", "末影人", "teleport", "介词搭配"]
  );

  add(
    "mobs-creatures", "生物图鉴",
    "mc-ket-042", "Skeleton Cave Warning", "Part 1",
    "data/exercises/mobs-creatures/ex-042.js",
    ["skeleton", "骷髅", "arrow", "must", "情态动词"]
  );

  add(
    "mobs-creatures", "生物图鉴",
    "mc-ket-043", "The Spider Jockey", "Part 3",
    "data/exercises/mobs-creatures/ex-043.js",
    ["spider", "蜘蛛骑士", "rare", "potion", "过去进行时"]
  );

  add(
    "mobs-creatures", "生物图鉴",
    "mc-ket-044", "Match the Villager Jobs", "Part 2",
    "data/exercises/mobs-creatures/ex-044.js",
    ["villager", "村民", "jobs", "职业", "trade"]
  );

  add(
    "exploration", "冒险探索",
    "mc-ket-004", "The Nether Portal Mishap", "Part 3",
    "data/exercises/exploration/ex-004.js",
    ["nether", "地狱", "ghast", "冒险"]
  );

  add(
    "settings-commands", "设置指令",
    "mc-ket-005", "How to Use the /tp Command", "Part 5",
    "data/exercises/settings-commands/ex-005.js",
    ["command", "指令", "teleport", "介词"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-006", "How to Craft a Pickaxe", "Part 5",
    "data/exercises/survival-basics/ex-006.js",
    ["crafting", "合成", "tools", "代词"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-007", "How to Tame a Wolf", "Part 4",
    "data/exercises/survival-basics/ex-007.js",
    ["wolf", "tame", "驯服", "物主代词"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-008", "How to Build a Shelter", "Part 4",
    "data/exercises/survival-basics/ex-008.js",
    ["shelter", "build", "建造", "sequencers"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-009", "Warning: Lava Ahead!", "Part 1",
    "data/exercises/survival-basics/ex-009.js",
    ["lava", "danger", "熔岩", "情态动词"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-010", "Match the Survival Gear", "Part 2",
    "data/exercises/survival-basics/ex-010.js",
    ["gear", "tools", "装备", "比较级"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-011", "My First Day — Diary", "Part 3",
    "data/exercises/survival-basics/ex-011.js",
    ["diary", "日记", "first-day", "过去时"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-012", "How to Make a Bed", "Part 4",
    "data/exercises/survival-basics/ex-012.js",
    ["bed", "sleep", "床", "冠词"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-033", "How to Mine Iron Ore", "Part 5",
    "data/exercises/survival-basics/ex-033.js",
    ["mining", "iron", "挖矿", "介词"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-034", "How to Make a Sword", "Part 5",
    "data/exercises/survival-basics/ex-034.js",
    ["sword", "weapon", "武器", "代词"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-035", "Farm Animals — What They Need", "Part 1",
    "data/exercises/survival-basics/ex-035.js",
    ["farm", "animals", "养殖", "can"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-036", "How to Plant a Tree", "Part 5",
    "data/exercises/survival-basics/ex-036.js",
    ["tree", "planting", "种树", "sequencers"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-037", "How to Breed Cows", "Part 4",
    "data/exercises/survival-basics/ex-037.js",
    ["breed", "cows", "繁殖", "量词"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-038", "My First Wheat Harvest", "Part 3",
    "data/exercises/survival-basics/ex-038.js",
    ["farm", "wheat", "种植", "过去时"]
  );

  // ─── 2026-05-30 新增（僵尸/潜影贝/冒险主题）────────
  add(
    "survival-basics", "生存基础",
    "mc-ket-045", "Zombie Survival", "Part 4",
    "data/exercises/survival-basics/ex-045.js",
    ["zombie", "僵尸", "undead", "night", "情态动词"]
  );

  add(
    "mobs-creatures", "生物图鉴",
    "mc-ket-046", "The Shulker Box Trap", "Part 3",
    "data/exercises/mobs-creatures/ex-046.js",
    ["shulker", "潜影贝", "levitation", "end-city", "现在时"]
  );

  add(
    "exploration", "冒险探索",
    "mc-ket-047", "Into the End", "Part 3",
    "data/exercises/exploration/ex-047.js",
    ["end", "末地", "ender-dragon", "stronghold", "过去进行时"]
  );

  add(
    "exploration", "冒险探索",
    "mc-ket-048", "The Ocean Monument", "Part 4",
    "data/exercises/exploration/ex-048.js",
    ["ocean-monument", "guardian", "axolotl", "水底", "比较级"]
  );

  add(
    "exploration", "冒险探索",
    "mc-ket-049", "Ancient City Warning", "Part 1",
    "data/exercises/exploration/ex-049.js",
    ["ancient-city", "warden", "sculk", "告示", "祈使句"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-050", "Match the Swords", "Part 2",
    "data/exercises/survival-basics/ex-050.js",
    ["sword", "weapon", "工具", "比较级", "matching"]
  );

  add(
    "mobs-creatures", "生物图鉴",
    "mc-ket-051", "The Warden's Noise", "Part 5",
    "data/exercises/mobs-creatures/ex-051.js",
    ["warden", "监守者", "deep-dark", "blind", "最高级"]
  );

  // ─── 2026-05-30 武器主题 ────────
  add(
    "survival-basics", "生存基础",
    "mc-ket-052", "The Mace", "Part 3",
    "data/exercises/survival-basics/ex-052.js",
    ["mace", "重锤", "1.21", "weapon", "比较级"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-053", "Bow vs Crossbow", "Part 2",
    "data/exercises/survival-basics/ex-053.js",
    ["bow", "crossbow", "弓", "弩", "比较级"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-054", "The Loyal Trident", "Part 4",
    "data/exercises/survival-basics/ex-054.js",
    ["trident", "三叉戟", "loyalty", "enchantment", "定语从句"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-055", "Shield Defense", "Part 5",
    "data/exercises/survival-basics/ex-055.js",
    ["shield", "盾牌", "defense", "banner", "比较级"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-056", "Axe or Sword", "Part 1",
    "data/exercises/survival-basics/ex-056.js",
    ["axe", "斧头", "durability", "blacksmith", "祈使句"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-057", "Tipped Arrows", "Part 4",
    "data/exercises/survival-basics/ex-057.js",
    ["tipped-arrows", "药箭", "potion", "cauldron", "定语从句"]
  );

  // ─── 2026-05-30 铜器时代更新 ────────
  add(
    "survival-basics", "生存基础",
    "mc-ket-058", "The Copper Sword", "Part 3",
    "data/exercises/survival-basics/ex-058.js",
    ["copper", "铜剑", "1.21.9", "weapon", "比较级"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-059", "Copper Armor Set", "Part 4",
    "data/exercises/survival-basics/ex-059.js",
    ["copper-armor", "铜套", "armor", "oxidize", "比较级"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-060", "Recycle Your Copper", "Part 5",
    "data/exercises/survival-basics/ex-060.js",
    ["recycle", "回收", "nugget", "furnace", "情态动词"]
  );

  // ─── 2026-06-01 Part 2 扩充（建造/怪物/材料/冒险/附魔/宠物）────────
  add(
    "survival-basics", "生存基础",
    "mc-ket-061", "Match the Building Blocks", "Part 2",
    "data/exercises/survival-basics/ex-061.js",
    ["building", "blocks", "建造", "玻璃", "match"]
  );

  add(
    "mobs-creatures", "生物图鉴",
    "mc-ket-062", "What Do Mobs Drop?", "Part 2",
    "data/exercises/mobs-creatures/ex-062.js",
    ["mob-drops", "ender-pearl", "掉落", "match"]
  );

  add(
    "exploration", "冒险探索",
    "mc-ket-063", "Pack for the Adventure", "Part 2",
    "data/exercises/exploration/ex-063.js",
    ["adventure", "potion", "冒险", "药水", "match"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-064", "Match the Materials", "Part 2",
    "data/exercises/survival-basics/ex-064.js",
    ["materials", "crafting", "材料", "加工", "match"]
  );

  add(
    "mobs-creatures", "生物图鉴",
    "mc-ket-065", "Match the Mob Weaknesses", "Part 2",
    "data/exercises/mobs-creatures/ex-065.js",
    ["weakness", "strategy", "弱点", "策略", "match"]
  );

  add(
    "exploration", "冒险探索",
    "mc-ket-066", "Match the Story Item", "Part 2",
    "data/exercises/exploration/ex-066.js",
    ["story", "treasure", "故事", "探险", "match"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-067", "Match the Enchantment", "Part 2",
    "data/exercises/survival-basics/ex-067.js",
    ["enchantment", "tools", "附魔", "工具", "match"]
  );

  add(
    "mobs-creatures", "生物图鉴",
    "mc-ket-068", "Match the Pet Food", "Part 2",
    "data/exercises/mobs-creatures/ex-068.js",
    ["pet", "taming", "宠物", "驯服", "match"]
  );
  // ─── 2026-06-01 轻量级短篇（3×3 Match + 短 Part1/4）────────
  add(
    "survival-basics", "生存基础",
    "mc-ket-069", "Find the Right Tool", "Part 2",
    "data/exercises/survival-basics/ex-069.js",
    ["tools", "工具", "pickaxe", "axe", "shovel", "3x3"]
  );

  add(
    "mobs-creatures", "生物图鉴",
    "mc-ket-070", "Night Survival", "Part 2",
    "data/exercises/mobs-creatures/ex-070.js",
    ["night", "skeleton", "creeper", "shield", "bow", "3x3"]
  );

  add(
    "exploration", "冒险探索",
    "mc-ket-071", "What's That Sound?", "Part 2",
    "data/exercises/exploration/ex-071.js",
    ["sound", "声音", "hiss", "cluck", "creeper", "3x3"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-072", "Plant a Garden", "Part 2",
    "data/exercises/survival-basics/ex-072.js",
    ["garden", "花园", "wheat", "pumpkin", "carrot", "3x3"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-073", "The Chest is Empty!", "Part 1",
    "data/exercises/survival-basics/ex-073.js",
    ["chest", "箱子", "chat", "iron", "gone"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-074", "Cave Entrance", "Part 1",
    "data/exercises/survival-basics/ex-074.js",
    ["cave", "洞穴", "sign", "sword", "torch"]
  );

  add(
    "mobs-creatures", "生物图鉴",
    "mc-ket-075", "Villager Wants to Trade", "Part 1",
    "data/exercises/mobs-creatures/ex-075.js",
    ["villager", "村民", "trade", "emerald", "wheat"]
  );

  add(
    "mobs-creatures", "生物图鉴",
    "mc-ket-076", "Lost Dog", "Part 1",
    "data/exercises/mobs-creatures/ex-076.js",
    ["wolf", "狼", "lost", "collar", "notice"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-077", "Smelt It!", "Part 4",
    "data/exercises/survival-basics/ex-077.js",
    ["smelt", "熔炼", "furnace", "iron", "ingot", "3-blank"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-078", "Time to Sleep", "Part 4",
    "data/exercises/survival-basics/ex-078.js",
    ["sleep", "睡觉", "night", "monster", "bed", "3-blank"]
  );
  // ─── 2026-06-01 短 Match 第二波（食物/交通/盔甲/村民/怪物/洞穴/动物/天气/药水/建筑）────────
  add(
    "survival-basics", "生存基础",
    "mc-ket-079", "Cook Time!", "Part 2",
    "data/exercises/survival-basics/ex-079.js",
    ["cooking", "furnace", "campfire", "cake", "3x3"]
  );

  add(
    "exploration", "冒险探索",
    "mc-ket-080", "Ride or Sail", "Part 2",
    "data/exercises/exploration/ex-080.js",
    ["transport", "boat", "minecart", "horse", "3x3"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-081", "Match the Armor", "Part 2",
    "data/exercises/survival-basics/ex-081.js",
    ["armor", "leather", "iron", "diamond", "3x3"]
  );

  add(
    "mobs-creatures", "生物图鉴",
    "mc-ket-082", "Help the Villagers", "Part 2",
    "data/exercises/mobs-creatures/ex-082.js",
    ["villager", "trade", "farmer", "librarian", "butcher", "3x3"]
  );

  add(
    "mobs-creatures", "生物图鉴",
    "mc-ket-083", "Night Monsters", "Part 2",
    "data/exercises/mobs-creatures/ex-083.js",
    ["creeper", "skeleton", "enderman", "night", "3x3"]
  );

  add(
    "exploration", "冒险探索",
    "mc-ket-084", "Cave Treasures", "Part 2",
    "data/exercises/exploration/ex-084.js",
    ["ore", "redstone", "diamond", "iron", "cave", "3x3"]
  );

  add(
    "mobs-creatures", "生物图鉴",
    "mc-ket-085", "What Do Farm Animals Give?", "Part 2",
    "data/exercises/mobs-creatures/ex-085.js",
    ["farm", "sheep", "cow", "chicken", "wool", "3x3"]
  );

  add(
    "exploration", "冒险探索",
    "mc-ket-086", "Bad Weather", "Part 2",
    "data/exercises/exploration/ex-086.js",
    ["weather", "rain", "thunder", "snow", "shield", "3x3"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-087", "Magic Potions", "Part 2",
    "data/exercises/survival-basics/ex-087.js",
    ["potion", "leaping", "swiftness", "water-breathing", "3x3"]
  );

  add(
    "survival-basics", "生存基础",
    "mc-ket-088", "Building Time!", "Part 2",
    "data/exercises/survival-basics/ex-088.js",
    ["building", "glass", "wool", "fence", "carpet", "3x3"]
  );
  // ----------------------------------------------------------------
  // TODO: add more entries here as you generate more exercises
  // ----------------------------------------------------------------

  return index;
})();

// ================================================================
//  AUTO-LOADER — dynamically loads all exercise scripts
//  Reads the INDEX registry (which already has file paths),
//  creates <script> elements, and returns a Promise.
//  No more manual <script src> tags needed in index.html!
// ================================================================
MINECRAFT_KET_LOADER = {
  loadAll: function () {
    var entries = MINECRAFT_KET_INDEX;
    console.log('[KET Loader] Loading', entries.length, 'exercises...');

    var promises = entries.map(function (entry) {
      return new Promise(function (resolve) {
        var script = document.createElement('script');
        script.src = entry.file;
        script.onload = function () { resolve(); };
        script.onerror = function () {
          console.warn('[KET Loader] Missing:', entry.file, '(' + entry.id + ')');
          resolve(); // don't block — skip broken files
        };
        document.head.appendChild(script);
      });
    });

    return Promise.all(promises).then(function () {
      console.log('[KET Loader] All exercises loaded.');
    });
  }
};
