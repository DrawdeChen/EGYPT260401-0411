export interface DuelCard {
  cardName: string;
  cardNameEn: string;
  connection: string;
  photoTip: string;
}

export interface DeepContent {
  stories: { title: string; text: string }[];
  highlights: { icon: string; text: string }[];
  food: { name: string; desc: string }[];
}

export interface Attraction {
  zh: string;
  en: string;
  arabic?: string;
  arabicRoman?: string;
  description?: string;
  photoTips?: string;
  isActivity?: boolean;
  deepContent?: DeepContent;
  duelCards?: DuelCard[];
}

export interface DaySchedule {
  day: number;
  date: string;
  title: string;
  subtitle: string;
  departureTime?: string;
  attractions: Attraction[];
  hiddenAttractions?: Attraction[];
  alternateVersion?: {
    title: string;
    subtitle: string;
    departureTime?: string;
    attractions: Attraction[];
    meals: { breakfast?: string; lunch?: string; dinner?: string };
    hotel: string;
    details?: string[];
  };
  meals: { breakfast?: string; lunch?: string; dinner?: string };
  hotel: string;
  details?: string[];
}

export interface FlightLeg {
  flight: string;
  airline: string;
  date: string;
  weekday: string;
  from: string;
  fromTerminal: string;
  to: string;
  toTerminal: string;
  departure: string;
  arrival: string;
  duration: string;
}

export interface TimePeriodClothing {
  period: string;
  temp: string;
  items: string[];
}

export interface SpecialNote {
  icon: string;
  text: string;
}

export interface WeatherDay {
  day: number;
  date: string;
  location: string;
  high: number;
  low: number;
  condition: string;
  conditionIcon: string;
  wind: string;
  clothing: TimePeriodClothing[];
  specialNotes?: SpecialNote[];
}

export interface PackingItem {
  category: string;
  icon: string;
  items: string[];
}

export const tourInfo = {
  title: "埃及 9 天深度之旅",
  subtitle: "開羅 ➜ 黑白沙漠 ➜ 阿斯旺 ➜ 盧克索郵輪",
  agency: "埃及豆豆旅行 Egypt Doudou Travel",
  agencyPhone: "+20 100 096 4509",
  agencyEmail: "Mohamed@egyptdoudou.com",
  agencyAddress: "Egypt Giza Elmansoria Elbasem Street",
  dateRange: "2026/04/01 – 04/11",
  totalDays: 11,
  groupSize: 8,
  price: {
    perPerson: "USD $1,850",
    deposit: "USD $400",
    domesticFlight: "USD $275（已含在團費中）",
    balance: "USD $1,725",
    balanceNote: "住沙漠貝都因房的團員尾款為 USD $1,710",
    paymentNote: "第二天支付團費",
  },
};

export const outboundFlights: FlightLeg[] = [
  {
    flight: "MU5006",
    airline: "中國東方航空",
    date: "04/01",
    weekday: "三",
    from: "臺灣桃園國際機場",
    fromTerminal: "T2",
    to: "上海浦東國際機場",
    toTerminal: "T1",
    departure: "18:40",
    arrival: "20:40",
    duration: "2 小時",
  },
  {
    flight: "MU223",
    airline: "中國東方航空",
    date: "04/02",
    weekday: "四",
    from: "上海浦東國際機場",
    fromTerminal: "T1",
    to: "開羅國際機場",
    toTerminal: "T3",
    departure: "01:45",
    arrival: "07:45",
    duration: "12 小時",
  },
];

export const returnFlights: FlightLeg[] = [
  {
    flight: "MU224",
    airline: "中國東方航空",
    date: "04/10",
    weekday: "五",
    from: "開羅國際機場",
    fromTerminal: "T3",
    to: "上海浦東國際機場",
    toTerminal: "T1",
    departure: "13:15",
    arrival: "06:00+1",
    duration: "10 小時 45 分",
  },
  {
    flight: "FM801",
    airline: "上海航空",
    date: "04/11",
    weekday: "六",
    from: "上海浦東國際機場",
    fromTerminal: "T1",
    to: "台北松山機場",
    toTerminal: "T1",
    departure: "09:10",
    arrival: "11:00",
    duration: "1 小時 50 分",
  },
];

export const accommodations = [
  {
    city: "開羅 CAI",
    hotel: "DOU DOU HOTEL",
    checkIn: "04/02",
    checkOut: "04/03",
    nights: 1,
    rooms: "03 Twin + 01 King",
    basis: "B.B（含早餐）",
  },
  {
    city: "黑白沙漠 SHR",
    hotel: "SKY CAMP × 3 + 貝都因帳篷 × 1",
    checkIn: "04/03",
    checkOut: "04/04",
    nights: 1,
    rooms: "03 King 星空帳篷 + 01 Twin 貝都因帳篷",
    basis: "H.B（含早晚餐）",
  },
  {
    city: "開羅 CAI",
    hotel: "Hilton Cairo Grand Nile",
    checkIn: "04/04",
    checkOut: "04/06",
    nights: 2,
    rooms: "03 Twin + 01 King",
    basis: "B.B（含早餐）",
  },
  {
    city: "郵輪 CRZ",
    hotel: "EL MAHROUSA 尼羅河郵輪（標準船型）",
    checkIn: "04/06",
    checkOut: "04/09",
    nights: 3,
    rooms: "03 Twin + 01 King",
    basis: "B.B（含早餐）",
  },
  {
    city: "開羅 CAI",
    hotel: "Hilton Cairo Grand Nile",
    checkIn: "04/09",
    checkOut: "04/10",
    nights: 1,
    rooms: "03 Twin + 01 King",
    basis: "B.B（含早餐）",
  },
];

export const domesticFlights = [
  {
    route: "開羅 CAI → 阿斯旺 ASW",
    date: "04/06",
    time: "05:45 → 07:05",
    flight: "MS 082",
    note: "埃及航空 EgyptAir",
  },
  {
    route: "盧克索 LXR → 開羅 CAI",
    date: "04/09",
    time: "20:10 → 21:20",
    flight: "MS 269",
    note: "埃及航空 EgyptAir",
  },
];

export const itinerary: DaySchedule[] = [
  {
    day: 1,
    date: "04/02 (四)",
    title: "抵達開羅 & 古城巡禮",
    subtitle: "清真寺、懸空教堂、哈里里市集",
    departureTime: "抵達後出發",
    attractions: [
      { zh: "抵達開羅機場，助理協助辦理落地簽", en: "Arrive Cairo, visa on arrival assistance", isActivity: true },
      {
        zh: "薩拉丁城堡",
        en: "Saladin Citadel",
        arabic: "قلعة صلاح الدين",
        arabicRoman: "Qalaʿat Salāḥ ad-Dīn",
        description: "建於 1176 年的伊斯蘭軍事要塞，由薩拉丁蘇丹下令興建以抵禦十字軍。城堡坐落於穆卡塔姆山上，可 360° 俯瞰整個開羅市區。建議停留 2–3 小時，平日人潮較少。城堡內有多座清真寺與博物館可一併參觀。",
        photoTips: "🔥 必拍：登上 Al-Gawhara 露台，用全景模式掃一圈開羅天際線，清真寺圓頂群超壯觀。｜🤳 趣味構圖：站在露台欄杆前，手機低角度仰拍，人+圓頂+藍天一次收齊。｜👥 團體照：城堡入口廣場很寬，全團排一排就能拍到城牆+城市背景。",
        deepContent: {
          stories: [
            { title: "掛肉選址", text: "薩拉丁決定建城堡時，傳說他在開羅各處懸掛肉塊測試空氣品質。所有地方的肉一天內就腐壞，唯獨穆卡塔姆山上的肉保持了數天新鮮，因此選定此處建造要塞。" },
            { title: "城堡大屠殺（1811 年）", text: "穆罕默德·阿里以兒子出征為名，邀請約 470 名馬穆魯克（軍事貴族）首領到城堡赴宴。宴後馬穆魯克們魚貫通過狹窄城門時，埋伏的傭兵從屋頂開火，幾乎全數殲滅。據說僅一人騎馬從城牆跳下逃生。一個下午終結了延續數百年的馬穆魯克統治。" },
            { title: "薩拉丁的謙遜", text: "薩拉丁本人從未住進自己建的城堡。每次在開羅時，他寧願住在城下一棟簡樸房屋，也不願入住法蒂瑪王朝的宮殿。" },
          ],
          highlights: [
            { icon: "🕳️", text: "約瑟夫之井（Bir Yusuf）— 深達 87 公尺的螺旋井，分上下兩層各有水車由牛隻驅動提水，底部接通尼羅河地下水脈，是中世紀工程傑作" },
            { icon: "🧱", text: "城牆中的金字塔石塊 — 仔細觀察城牆，部分石塊是從古埃及金字塔拆下來加固的" },
            { icon: "🏛️", text: "Gawhara 宮殿博物館 — 正是大屠殺發生的地點，現在改為博物館" },
          ],
          food: [
            { name: "Mohammed al-Refaaee", desc: "城堡附近老牌烤肉店，當地人的口袋名單，kebab 和 kofta 道地" },
            { name: "Zooba", desc: "潮流埃及街頭美食，主打 ta'ameya（埃及 falafel）、ful（蠶豆泥）、hawawshi（肉餡烤餅）" },
          ],
        },
      },
      {
        zh: "穆罕默德·阿里清真寺",
        en: "Mosque of Muhammad Ali",
        arabic: "مسجد محمد علي",
        arabicRoman: "Masjid Muḥammad ʿAlī",
        description: "位於城堡內的地標建築，又稱「雪花石膏清真寺」，1848 年完工。奧斯曼風格的巨大圓頂與細長宣禮塔是開羅天際線的標誌。內部以雪花石膏裝飾牆面，挑高大廳吊掛數百盞水晶燈。進入需脫鞋，可穿襪子。",
        photoTips: "🔥 必拍：中庭抬頭拍圓頂內部的彩繪穹頂，手機超廣角模式效果驚人。｜🤳 趣味構圖：中庭噴泉前蹲低拍，水面倒映圓頂和宣禮塔。｜👥 團體照：中庭空間大，圍著噴泉站一圈拍俯角。⚠️ 室內關閃光燈。",
        deepContent: {
          stories: [
            { title: "為亡子而建", text: "穆罕默德·阿里在 1830 年下令建造這座清真寺，是為了紀念英年早逝的兒子 Tusun Pasha。整座建築耗時 25 年（1832–1857），阿里本人未能看到完工。" },
            { title: "雙塔的政治宣言", text: "清真寺有兩座 84 公尺高的宣禮塔，是全埃及最高。當時奧斯曼帝國法律禁止蘇丹以外的人建造超過一座宣禮塔，穆罕默德·阿里偏偏建了兩座，公然表達脫離奧斯曼統治的野心。" },
            { title: "永遠不走的法國鐘", text: "庭院中的黃銅鐘是法國國王路易·菲利普送的禮物，交換條件是盧克索方尖碑（現在矗立在巴黎協和廣場）。諷刺的是，這座鐘從送達至今從未運作過。很多人認為埃及在這筆交易中吃了大虧：一座 3,300 年的法老方尖碑，換了一個壞鐘。" },
          ],
          highlights: [
            { icon: "⚰️", text: "穆罕默德·阿里的陵墓 — 在禮拜大廳西側角落，大理石棺上覆蓋精緻青銅鏤空屏風，很多遊客沒注意到" },
            { icon: "🕰️", text: "那座永遠不走的法國鐘 — 就在庭院中，見證了史上最不划算的交易" },
            { icon: "🌇", text: "清真寺外平台是開羅最佳城市全景觀景點，天氣好時可以看到金字塔" },
          ],
          food: [],
        },
      },
      {
        zh: "懸空教堂",
        en: "The Hanging Church",
        arabic: "الكنيسة المعلقة",
        arabicRoman: "Al-Kanīsa al-Muʿallaqa",
        description: "建於 3–4 世紀的科普特東正教教堂，懸建於古羅馬碉堡（巴比倫要塞）的南門之上，因此得名「懸空」。是開羅最古老的教堂之一，內部有 110 幅聖像畫與 13 根代表耶穌和十二門徒的柱子。教堂位於科普特區（Old Cairo），周邊還有科普特博物館可順道參觀。",
        photoTips: "🔥 必拍：上午陽光透過彩繪玻璃灑在地面的彩色光斑，拿手機貼地拍超夢幻。古老的木造講壇與聖像畫也值得特寫。｜🤳 趣味構圖：站在入口階梯回望，利用階梯延伸感拍出縱深。｜👥 團體照：教堂前庭院空間較大，以古老石牆為背景。",
        deepContent: {
          stories: [
            { title: "搬山奇蹟", text: "10 世紀時，法蒂瑪哈里發引用聖經「信心能移山」的經文，要求科普特教宗證明信仰，否則殺光所有科普特基督徒。教宗在懸空教堂祈禱三天三夜，夢中聖母指示他去找皮匠 Simon。Simon 帶眾人到穆卡塔姆山腳，教宗呼喊 400 次「主啊，憐憫我們」並三次劃十字，山體三次劇烈震動升起，陽光從山體下方穿過。科普特教會至今在聖誕齋期前加守三天額外的齋期以紀念此事。" },
            { title: "教堂的多舛命運", text: "840 年被總督部分摧毀，之後還被改建為清真寺，直到 10 世紀才重新祝聖為教堂。11 世紀起成為科普特教宗的駐地（原本在亞歷山大港）。" },
          ],
          highlights: [
            { icon: "🖼️", text: "「科普特蒙娜麗莎」— 教堂內最古老的聖像畫（8 世紀），描繪聖母抱聖嬰與施洗約翰" },
            { icon: "⛵", text: "諾亞方舟天花板 — 木質天花板刻意設計成方舟船底形狀，象徵希望與救贖" },
            { icon: "🔍", text: "地板下的羅馬堡壘 — 有一小塊透明玻璃地板，可以看到下方的羅馬堡壘結構" },
          ],
          food: [
            { name: "Old Cairo Restaurant & Cafe", desc: "懸空教堂附近最方便的選擇，傳統埃及料理，價格實惠" },
          ],
        },
      },
      {
        zh: "洞穴教堂（聖西蒙修道院）",
        en: "Cave Church of St. Simon the Tanner",
        arabic: "كنيسة القديس سمعان الخراز",
        arabicRoman: "Kanīsat al-Qiddīs Simʿān al-Kharrāz",
        description: "位於穆卡塔姆山（Mokattam）的巨型洞穴教堂，是中東最大的教堂之一，可容納 2 萬人。整座教堂直接鑿入山壁岩洞中，氣勢磅礴。以 10 世紀科普特聖人「皮匠西蒙」命名，傳說他曾以信仰之力移動穆卡塔姆山。教堂所在的區域被稱為「垃圾城」（Zabbaleen City），是開羅拾荒者社區，但教堂本身極為壯觀，岩壁上刻有大型聖經故事浮雕。",
        photoTips: "🔥 必拍：巨大岩洞空間+排排座椅的壯觀全景，手機超廣角拍才裝得下。岩壁上的聖經浮雕也值得特寫。｜🤳 趣味構圖：站在講台前，以整個洞穴拱頂為背景，人在巨大空間中顯得渺小。｜👥 團體照：教堂中央走道，兩側座椅延伸到洞穴深處，構圖超有氣勢。",
        deepContent: {
          stories: [
            { title: "皮匠 Simon 的自我挖眼", text: "聖西門是搬山奇蹟的主角。這位虔誠的皮匠因讀到聖經「若右眼使你跌倒，就剜出來丟掉」，真的挖出了自己一隻眼睛以避免色慾誘惑。正是這樣極端虔誠的人，被聖母選中去移山。" },
            { title: "從垃圾堆中誕生的信仰聖殿", text: "教堂所在的 Manshiyat Nasser 區居民是 Zabbaleen（扎巴林人，意為「垃圾人」），是以收集和回收垃圾為生的科普特基督徒，回收率高達 80%，是全世界最高效的回收系統。1970 年代這群社會底層的人們用雙手在山壁中鑿出了教堂。" },
          ],
          highlights: [
            { icon: "⛪", text: "不只一座 — 園區內共有六座風格各異的洞穴教堂，不要只看最大的那座" },
            { icon: "🎭", text: "岩壁聖經浮雕 — 包括耶穌誕生、拉撒路復活等場景，規模宏大" },
            { icon: "🚶", text: "穿越垃圾城 — 進入教堂的路上會穿過社區，道路兩旁堆滿回收物資，本身就是震撼的文化體驗" },
          ],
          food: [],
        },
      },
      {
        zh: "哈里里市集",
        en: "Khan El-Khalili Bazaar",
        arabic: "خان الخليلي",
        arabicRoman: "Khān al-Khalīlī",
        description: "建於 1382 年的傳統市集，是中東現存最古老的市集之一。迷宮般的巷弄裡販售銅器、香料、手工燈飾、紙莎草畫、珠寶與各式紀念品。別忘了在百年老咖啡館 El Fishawi 喝杯薄荷茶或土耳其咖啡。購物記得殺價，通常從開價的 30–50% 開始談。",
        photoTips: "🔥 必拍：黃昏燈籠全部亮起的巷弄——滿天手工銅燈掛在頭頂，怎麼拍都美。Bab al-Ghuri 拱門是經典打卡點。｜🤳 趣味構圖：找一家銅燈飾店，站在燈海中間拍，光影交錯超上鏡。也可以拍手捧香料的特寫。｜👥 團體照：El Fishawi 百年咖啡館門口，手持薄荷茶合影。⚠️ 拍當地人前先問一聲，給 10 EGP 小費。",
        deepContent: {
          stories: [
            { title: "法蒂瑪王朝的墳場之上", text: "市集建造前這裡是法蒂瑪王朝哈里發的皇家墓地。el-Khalili 拆除了墓地來建市集，據說有些老商販相信地底下仍然長眠著法蒂瑪王朝的鬼魂。" },
            { title: "諾貝爾文學獎的搖籃", text: "1988 年諾貝爾文學獎得主納吉布·馬赫福茲以此市集為背景寫了多部小說。他生前幾乎每天都來 El-Fishawy 咖啡館寫作，坐在同一個位置。" },
          ],
          highlights: [
            { icon: "☕", text: "El-Fishawy 咖啡館（1797 年創立）— 用熱沙煮的傳統阿拉伯咖啡，埃及末代國王法魯克也曾是常客" },
            { icon: "💍", text: "金匠巷（Goldsmiths' Souq）— 至今仍是當地人買金飾的地方，不只觀光景點" },
            { icon: "🔨", text: "隱藏工坊 — 小巷深處可看到木鑲嵌工匠和銅匠現場製作，是市集的靈魂" },
          ],
          food: [
            { name: "Naguib Mahfouz Cafe", desc: "以諾貝爾文學獎得主命名，Oberoi 酒店集團經營，品質穩定，推薦 koshari 和新鮮果汁" },
            { name: "Abou Tarek", desc: "開羅「koshari 之王」，多層樓店面每天服務數千人，是吃 koshari 的終極朝聖地" },
            { name: "街頭小吃", desc: "市集內攤販的 ta'ameya（埃及 falafel，用蠶豆製作）、samosa、koshari，便宜道地" },
          ],
        },
      },
    ],
    meals: { lunch: "當地餐廳", dinner: "當地餐廳" },
    hotel: "DOU DOU HOTEL",
  },
  {
    day: 2,
    date: "04/03 (五)",
    title: "黑白沙漠探險",
    subtitle: "奇幻地貌 & 星空露營",
    departureTime: "07:00 出發",
    attractions: [
      {
        zh: "黑色沙漠",
        en: "Black Desert",
        arabic: "الصحراء السوداء",
        arabicRoman: "Aṣ-Ṣaḥrāʾ as-Sawdāʾ",
        description: "火山玄武岩碎屑覆蓋的黑色山丘群，與周圍金黃沙漠形成強烈對比。可攀登小山丘（約 50 公尺高）俯瞰全景。位於巴哈利亞綠洲與法拉夫拉綠洲之間。",
        photoTips: "🔥 必拍：黑色山丘與金黃沙漠的強烈色彩對比，日落時整片被染成暗金色。｜🤳 趣味構圖：爬上小山丘頂端張開雙手，請同伴從下方拍剪影——人在天際線上超帥。｜👥 團體照：山丘腳下平地，大家面對鏡頭跳起來抓拍。",
        deepContent: {
          stories: [
            { title: "1.8 億年前的火山痕跡", text: "黑色並非來自沙子，而是侏羅紀時期的火山活動噴發出大量輝綠岩，經億萬年風化崩解後如「黑色糖霜」覆蓋在金黃沙丘上。" },
            { title: "貝都因傳說", text: "貝都因人世代相信黑色沙漠是大地被古代之火燒過的痕跡，這些黑石頭是「大地的傷疤」，提醒人們尊重沙漠的力量。" },
          ],
          highlights: [
            { icon: "⛰️", text: "Gebel el-Marsus（黑沙漠最高峰）— 可攀登到頂部 360 度俯瞰，山體本身就是地質教科書" },
            { icon: "🪨", text: "撿起一塊石頭翻面 — 表面是黑色氧化層，底部卻是金黃色，展現「黑皮金心」的雙重結構" },
            { icon: "🇬🇧", text: "English Mountain — 一戰時英國軍官在山頂設瞭望哨監視利比亞入侵，遺跡仍在，是看日落的經典地點" },
          ],
          food: [
            { name: "沙漠露營餐", desc: "貝都因嚮導用傳統方式在沙地裡烹飪米飯、雞肉和用沙子加熱的扁麵包，非常難得的體驗" },
          ],
        },
      },
      {
        zh: "白色沙漠",
        en: "White Desert",
        arabic: "الصحراء البيضاء",
        arabicRoman: "Aṣ-Ṣaḥrāʾ al-Bayḍāʾ",
        description: "石灰岩經數百萬年風蝕，形成蘑菇狀、兔子狀、雞形等超現實的白色奇岩。是埃及最著名的自然奇景之一，被列為國家公園保護區。夜晚零光害，銀河清晰可見，是絕佳的觀星地點。",
        photoTips: "🔥 必拍：蘑菇岩和兔子岩是白沙漠招牌，日落時被染成金橘色最夢幻。夜晚手機開夜景模式拍銀河（放在石頭上穩定）。｜🤳 趣味構圖：站在蘑菇岩旁邊比大小，或假裝用手「托住」蘑菇岩頂。｜👥 團體照：營火旁大家圍坐，手機夜景模式長曝拍星空人像。",
        deepContent: {
          stories: [
            { title: "古代海底的奇觀", text: "白堊紀時期（約 1.45 億年前）這裡是一片溫暖淺海，無數海洋微生物的鈣質外殼沉積成厚實石灰岩層。海退後經數千萬年風蝕形成今天的超現實造型——這片沙漠本質上是「古代海底」被抬升到陸地上。" },
            { title: "岩石的名字", text: "貝都因人為奇岩命名：Chicken & Mushroom（雞與蘑菇，也被戲稱「雞與原子彈」）、Rabbit / Duck（同一塊岩石，有人看成兔子有人看成鴨子，沙漠版視覺錯覺）、Ice Cream Cone（冰淇淋甜筒）。" },
          ],
          highlights: [
            { icon: "🦊", text: "夜間耳蝠狐 — 露營時嚮導會放雞蛋吸引世界最小的狐狸（fennec fox，招牌大耳朵），牠們會在火光邊緣穿梭覓食" },
            { icon: "🏜️", text: "Agabat Valley — 比主景區人少許多，石灰岩地貌更壯觀，攝影師的秘密天堂" },
            { icon: "🌅", text: "色彩魔法 — 白色石灰岩在日出日落會變粉紅、橘金色，與正午的純白截然不同" },
          ],
          food: [],
        },
      },
      {
        zh: "黃色沙漠",
        en: "Yellow Desert",
        description: "金黃色沙丘綿延起伏，呈現最經典的撒哈拉沙漠風貌。柔軟細沙在不同光線下會呈現金色到橘紅色的變化。",
        photoTips: "🔥 必拍：日落時金黃沙丘被夕陽染成橘紅，手機直接拍就很美。｜🤳 趣味構圖：站在沙丘稜線上拍剪影，雙手張開超經典。也可以拍沙丘上的腳印延伸消失。｜👥 團體照：大家在沙丘頂端一字排開，以夕陽為背景。",
        deepContent: {
          stories: [
            { title: "三色沙漠的過渡帶", text: "黃色沙漠位於黑白沙漠之間，阿拉伯語 Aqabat 意為「障礙與艱難的通道」。這裡屬於更古老的努比亞砂岩層，是世界上極為罕見的三色地貌交融帶——黑色火山碎屑、金黃砂岩、白色石灰岩懸崖同時出現。" },
          ],
          highlights: [
            { icon: "🏔️", text: "Twin Peaks（雙峰）— Aqabat 區域的標誌性雙峰山，是辨識方向的地標" },
            { icon: "👁️", text: "三色沙漠最佳觀察點 — 站在高處可一次看到黑、黃、白三種顏色的沙漠" },
          ],
          food: [],
        },
      },
      {
        zh: "水晶山",
        en: "Crystal Mountain",
        arabic: "جبل البلور",
        arabicRoman: "Jabal al-Billūr",
        description: "整座山丘（約 6 公尺高）由石英和方解石水晶構成，在陽光下閃閃發光。位於黑白沙漠之間的公路旁，停留約 15–30 分鐘即可。請勿撿拾水晶帶走，這是受保護的自然景觀。",
        photoTips: "🔥 必拍：陽光下水晶閃閃發光，手機貼近用微距模式拍水晶特寫。｜🤳 趣味構圖：蹲在水晶岩旁邊，手掌攤開放在水晶旁拍對比照，折射的光點很夢幻。｜👥 團體照：山丘前方空地，快拍快走（停留約 15 分鐘）。",
        deepContent: {
          stories: [
            { title: "被掀開屋頂的寶石盒", text: "水晶山的前身是一個地下洞穴。約 3,000 萬年前，地殼深處的高溫含礦熱液在石灰岩裂隙中結晶形成重晶石和方解石。後來地殼運動將洞穴推上地表，洞頂被侵蝕消失，形成今天這座「被掀開屋頂的寶石盒」。" },
            { title: "意外發現與劫難", text: "水晶山是修建公路時意外挖開的。最初工人不知其價值，部分山體被當作修路材料開採。被列為保護區前，大量遊客瘋狂撿拾方解石當紀念品，造成不可逆的損失。2008 年才正式納入白色沙漠保護區。" },
          ],
          highlights: [
            { icon: "🔦", text: "帶手電筒近距離照射 — 可以看到晶體內部的層理結構，遠比陽光下看得更清楚" },
            { icon: "🌈", text: "彩虹折射 — 在不同角度觀察，光線照到晶體切面時會出現彩虹" },
          ],
          food: [],
        },
      },
    ],
    alternateVersion: {
      title: "法尤姆綠洲探險",
      subtitle: "沙漠關閉時的替代行程",
      departureTime: "07:00 出發",
      attractions: [
        {
          zh: "法尤姆綠洲",
          en: "Fayoum Oasis",
          arabic: "واحة الفيوم",
          arabicRoman: "Wāḥat al-Fayyūm",
          description: "世界上最古老的自然保護區之一，位於尼羅河西段的沙漠中，是一片廣闊的天然窪地綠洲。擁有豐富的自然生態和數千年的歷史遺跡。",
          photoTips: "🔥 必拍：綠洲與沙漠的交界線，一邊翠綠一邊金黃的強烈對比。｜🤳 趣味構圖：站在綠洲邊緣，一腳踩沙漠一腳踩綠地。｜👥 團體照：湖邊有棕櫚樹背景的地方。",
        },
        {
          zh: "加龍湖自然保護區",
          en: "Qaroun Lake Nature Reserve",
          arabic: "محمية بحيرة قارون",
          arabicRoman: "Maḥmiyyat Buḥayrat Qārūn",
          description: "埃及最大的天然湖泊之一，可觀賞候鳥、爬行動物和哺乳動物。湖區風光優美，是攝影愛好者的天堂。",
          photoTips: "🔥 必拍：湖面倒映天空和沙漠丘陵的畫面。候鳥群飛的瞬間。｜🤳 趣味構圖：湖邊蹲低拍，水面倒影+真人上下對稱。｜👥 團體照：湖畔空地，以湖水和沙漠為背景。",
        },
      ],
      meals: { breakfast: "飯店", lunch: "當地餐廳", dinner: "營地晚餐" },
      hotel: "法尤姆露營（可自費升級星空飯店）",
      details: ["※ 沙漠關閉時的替代行程", "露營可自費升級星空酒店（需加費用）"],
    },
    meals: { breakfast: "飯店", lunch: "沙漠野餐", dinner: "沙漠營火晚餐" },
    hotel: "黑白沙漠星空飯店 Sky Camp",
    details: ["車程約 3.5 小時", "沙漠吉普車探險", "夜晚銀河星空壯觀"],
  },
  {
    day: 3,
    date: "04/04 (六)",
    title: "返回開羅 & 購物",
    subtitle: "購物中心自由逛街",
    departureTime: "09:00 出發",
    attractions: [
      { zh: "乘車返回開羅", en: "Drive back to Cairo", isActivity: true },
      { zh: "購物中心逛街", en: "Shopping Mall", isActivity: true },
    ],
    hiddenAttractions: [
      {
        zh: "埃及文明博物館",
        en: "National Museum of Egyptian Civilization (NMEC)",
        arabic: "المتحف القومي للحضارة المصرية",
        arabicRoman: "Al-Matḥaf al-Qawmī lil-Ḥaḍāra al-Miṣriyya",
        description: "2021 年正式開幕，位於老開羅的福斯塔特（Fustat）地區。與大埃及博物館不同，這座博物館涵蓋了埃及從史前到現代的完整文明史。鎮館之寶是 22 具皇家木乃伊（2021 年以盛大遊行從舊博物館遷入），包括拉美西斯二世、哈特謝普蘇特女王等法老的木乃伊。建議停留 2–3 小時。",
        photoTips: "🔥 必拍：皇家木乃伊廳氣氛莊嚴，可拍展廳全景但禁閃光燈。建築本身的現代設計+尼羅河景觀也很值得拍。｜🤳 趣味構圖：博物館入口處的大階梯，以老開羅為背景。｜👥 團體照：博物館正門廣場。",
      },
    ],
    meals: { breakfast: "沙漠營地", lunch: "當地餐廳" },
    hotel: "Hilton Cairo Grand Nile",
    details: ["旅行社會給埃鎊現金，請自行購買當天晚餐"],
  },
  {
    day: 4,
    date: "04/05 (日)",
    title: "博物館 & 吉薩金字塔",
    subtitle: "世界七大奇蹟之一",
    departureTime: "09:00 出發",
    attractions: [
      {
        zh: "新埃及博物館",
        en: "Grand Egyptian Museum (GEM)",
        arabic: "المتحف المصري الكبير",
        arabicRoman: "Al-Matḥaf al-Miṣrī al-Kabīr",
        description: "2025 年 11 月正式開幕的世界最大考古博物館，佔地 50 萬平方公尺，收藏超過 10 萬件文物。鎮館之寶為圖坦卡門陵墓的全部 5,000 多件寶藏（首次完整展出）。建議停留 3–4 小時，早上開門時入場人潮最少。",
        photoTips: "🔥 必拍：大廳 11 公尺高的拉美西斯二世巨像，手機仰拍就超震撼。圖坦卡門黃金面具是鎮館之寶。⚠️ 圖坦卡門區只能手機拍（禁相機），全館禁閃光、禁自拍桿。｜🤳 趣味構圖：在大門口巨型階梯上回望，遠方剛好能看到金字塔——博物館+金字塔同框超值得。｜👥 團體照：入口廣場面向金字塔方向，一次拍到現代建築與古代奇蹟。",
        deepContent: {
          stories: [
            { title: "黃金面具的「整容事件」", text: "圖坦卡門黃金面具重達 10 公斤以上。2014 年清潔時藍金條紋鬍鬚被撞落，工作人員竟用環氧樹脂草率黏回，後來經專業修復才恢復原貌——這段博物館醜聞讓全世界心跳漏了一拍。" },
            { title: "聞到 4,500 年前的香氣", text: "1954 年考古學家在大金字塔旁發現密封坑洞。鑽開第一個孔時，所有人都聞到了雪松木的清香——那是 4,500 年前封存的氣味！船身被拆成 1,224 塊碎片陪葬，修復師花了 14 年重新組裝。這艘 43.4 公尺的太陽船現已搬入 GEM。" },
            { title: "法老的詛咒？", text: "1922 年 Howard Carter 開墓後，資助者 Lord Carnarvon 數月內因蚊蟲感染身亡，媒體瘋狂炒作「法老詛咒」。但 Carter 本人活了 17 年後才病逝，在場的 Carnarvon 女兒活到 79 歲。所謂詛咒，更多是當年報紙為了賣報煽動的故事。" },
          ],
          highlights: [
            { icon: "🪜", text: "大階梯 — 沿途展示 87 尊法老與神祇巨像，且可透過玻璃牆遠眺金字塔群，全世界最奢華的博物館樓梯" },
            { icon: "⛵", text: "太陽船 — 4,500 年歷史、世界現存最古老的完整船隻，就在館內" },
            { icon: "🔬", text: "第二艘太陽船 — 目前正在 GEM 內公開組裝中，可近距離觀看考古修復過程" },
          ],
          food: [
            { name: "Zooba GEM", desc: "館內，埃及街頭小吃升級版（koshari、falafel、ta'amiya），快速方便" },
            { name: "The Pyramids Restaurant", desc: "館內正式餐廳，可觀金字塔景觀，適合午餐" },
          ],
        },
        duelCards: [
          { cardName: "青眼白龍", cardNameEn: "Blue-Eyes White Dragon", connection: "動畫中青眼白龍與黑暗大法師對戰的「石板」，原型就是古埃及的石碑（stele）。GEM 內展出大量類似的古代石板文物，上面刻有神獸與祭司的對決場景。", photoTip: "找到石板文物區，手持青眼白龍卡對齊石板上的浮雕拍合照，重現三千年前的記憶石板。" },
          { cardName: "黑暗大法師", cardNameEn: "Dark Magician", connection: "原型是古埃及的大祭司，掌握神秘的魔法力量。GEM 的祭司文物區展出祭司服飾、權杖和護身符，正是黑暗大法師的形象來源。", photoTip: "在祭司文物展區前手持黑暗大法師卡，讓卡片與背後的祭司雕像同框。" },
          { cardName: "黑魔導女孩", cardNameEn: "Dark Magician Girl", connection: "作為黑暗大法師的弟子，同樣以古埃及祭司傳統為原型。GEM 內有女祭司相關文物可呼應。", photoTip: "在女性神祇或女祭司的展品旁拍攝，呼應師徒傳承的設定。" },
        ],
      },
      {
        zh: "吉薩金字塔群",
        en: "Giza Pyramids Complex",
        arabic: "أهرامات الجيزة",
        arabicRoman: "Ahrāmāt al-Jīzah",
        description: "古代世界七大奇蹟中唯一現存者。包含胡夫大金字塔（高 146 公尺，建於約公元前 2560 年）、卡夫拉金字塔與孟卡拉金字塔。胡夫大金字塔由約 230 萬塊石灰岩堆砌而成，每塊重約 2.5 噸。可額外付費進入金字塔內部（通道狹窄悶熱，有幽閉恐懼者慎入）。",
        photoTips: "🔥 必拍：全景台（Panoramic Point）三座金字塔完美排列，手機全景模式一次收齊。｜🤳 趣味構圖：經典「手指捏住金字塔尖」或「手掌托住金字塔」的錯位照——訣竅是一人站遠處、一人近拍，多試幾次角度。也可以拍「親吻金字塔」。｜👥 團體照：全景台空間大，全團排開帶入三塔背景。⚠️ 避開正午超曬。",
        deepContent: {
          stories: [
            { title: "失蹤的法老", text: "胡夫大金字塔裡面從未找到任何木乃伊。考古學家進入時內部早已被洗劫一空——法老遺體究竟去了哪裡，至今無人知曉。" },
            { title: "2023 年宇宙射線的新發現", text: "ScanPyramids 團隊利用「緲子射線照影術」（用宇宙射線穿透巨石「透視」內部）發現了一條隱藏走廊，長 9 公尺。考古學家認為其下方可能存在胡夫真正的墓室——4,500 年後我們仍在發現新秘密。" },
            { title: "原本會閃瞎你的眼", text: "金字塔原本覆蓋著拋光白色石灰岩，在陽光下如巨大鏡子，數十公里外都能看到反光。這些石灰岩後來被拆去建造開羅的清真寺。" },
            { title: "沉入海底的石棺", text: "1837 年英國軍官用炸藥炸開孟卡拉金字塔，發現華麗的玄武岩石棺。裝船運往大英博物館途中遭遇風暴，連同石棺沉入地中海，至今下落不明。" },
          ],
          highlights: [
            { icon: "👷", text: "工人不是奴隸 — 考古發現建造者城鎮遺址，證明他們是受薪專業人士，享有良好居住條件" },
            { icon: "👀", text: "卡夫拉的視覺騙局 — 它比胡夫矮 2 公尺，但建在高 10 公尺的地基上，看起來反而最大" },
            { icon: "✨", text: "卡夫拉頂部的原始石灰岩 — 仰頭看頂端，是唯一能想像金字塔原本閃亮外觀的地方" },
            { icon: "⭐", text: "獵戶座對齊 — 三座金字塔的排列完美對應獵戶座腰帶三顆星，古埃及人相信法老靈魂通過此星座升天" },
          ],
          food: [
            { name: "9 Pyramids Lounge", desc: "吉薩高原內唯一餐廳，可同時眺望三座金字塔，meze、kebab、石爐烤餅" },
            { name: "Andrea El Haram", desc: "開羅人週末最愛的老字號烤雞，在地人推薦" },
          ],
        },
      },
      {
        zh: "騎駱駝體驗",
        en: "Camel Ride",
        description: "在金字塔前騎乘駱駝是埃及最經典的體驗之一。行程約 20–30 分鐘，會繞行金字塔群。建議事先與駱駝主人談好價格和時間，避免事後爭議。",
        photoTips: "🔥 必拍：騎在駱駝上回頭看金字塔那一瞬間！請同伴從側面稍低角度拍，帶入駱駝全身+金字塔。｜🤳 趣味構圖：假裝自己是法老出巡，目視前方嚴肅表情配上駱駝+沙漠背景。也可以拍駱駝的大臉特寫（牠們很上鏡）。｜👥 團體照：多人並排騎駱駝的側面照，金字塔在遠方，超壯觀。",
      },
      {
        zh: "人面獅身像",
        en: "Great Sphinx of Giza",
        arabic: "أبو الهول",
        arabicRoman: "Abū al-Hawl",
        description: "獅身人面像，長 73 公尺、高 20 公尺，已守護金字塔超過 4,500 年。面部據信以卡夫拉法老為原型雕刻。前方有一大片沙地觀景區，是最佳拍照位置。",
        photoTips: "🔥 必拍：側面拍可同時帶入獅身人面像+後方金字塔，構圖最經典。｜🤳 趣味構圖：「親吻獅身人面像」錯位照超熱門——站在觀景台右側特定角度，嘟嘴對準獅身人面像的嘴。也可以拍「摸牠下巴」的角度。｜👥 團體照：觀景台前方排開，獅身人面像完整入鏡。",
        deepContent: {
          stories: [
            { title: "夢境石碑 — 古代最成功的政治宣傳", text: "兩爪之間立著 3.6 公尺高的花崗岩石碑。碑上記載：年輕王子圖特摩斯四世在石像旁休息時，太陽神託夢說「幫我清除積沙，我就讓你當法老」。但歷史學家認為這是政治宣傳——圖特摩斯四世並非原定繼承人，他需要「神的旨意」來合法化統治權。" },
            { title: "鼻子不是拿破崙轟掉的", text: "丹麥探險家 1737 年的素描中石像已經沒有鼻子了——比拿破崙出生還早。更可信的記載是 1378 年一位蘇菲派穆斯林看到農民向石像獻祭，認為是偶像崇拜，用鑿子把鼻子敲掉了。" },
            { title: "亞特蘭提斯的紀錄大廳？", text: "美國靈媒 Edgar Cayce 1930 年代預言石像下方埋藏著亞特蘭提斯的「紀錄大廳」。透地雷達確實偵測到一些異常，但鑽探後只發現天然岩石裂縫。至今沒有隱藏密室被確認，但傳說仍讓探險家著迷。" },
          ],
          highlights: [
            { icon: "📜", text: "夢境石碑 — 就在前爪之間，3,400 年歷史，很多人只顧自拍而忽略它" },
            { icon: "🦁", text: "尾巴 — 繞到後方可看到精雕的尾巴，大多數遊客只看正面就離開了" },
            { icon: "🔧", text: "修復痕跡 — 仔細觀察身體各部位，可看到古埃及、羅馬、現代三個時代的修復層層疊加" },
          ],
          food: [],
        },
        duelCards: [
          { cardName: "真紅眼黑龍", cardNameEn: "Red-Eyes Black Dragon", connection: "人面獅身像兩爪之間的「夢境石碑」記載了神與凡人的契約——石碑上記錄力量的概念，正呼應遊戲王中石板召喚怪獸的設定。真紅眼象徵潛力與黑暗中的力量，與守護金字塔 4,500 年的獅身人面像氣質相通。", photoTip: "站在夢境石碑旁，手持真紅眼黑龍卡，讓石碑作為背景——重現石板與怪獸的連結。" },
        ],
      },
    ],
    meals: { breakfast: "飯店", lunch: "當地餐廳", dinner: "當地餐廳" },
    hotel: "Hilton Cairo Grand Nile",
  },
  {
    day: 5,
    date: "04/06 (一)",
    title: "飛往阿斯旺",
    subtitle: "菲萊神廟、風帆船、努比亞村",
    departureTime: "早班機",
    attractions: [
      { zh: "搭乘國內線飛往阿斯旺", en: "Domestic flight to Aswan", isActivity: true },
      {
        zh: "菲萊神廟（伊西斯神殿）",
        en: "Philae Temple (Temple of Isis)",
        arabic: "معبد فيلة",
        arabicRoman: "Maʿbad Fīla",
        description: "供奉女神伊西斯的神殿，原位於菲萊島，因阿斯旺大壩蓄水面臨淹沒危機，1960–80 年代由 UNESCO 主導整座遷移至阿吉勒基亞島。搭摩托船登島，航程約 10 分鐘。神殿融合古埃及、希臘、羅馬建築風格，浮雕保存完好。",
        photoTips: "🔥 必拍：搭摩托船靠近時從船上拍神殿全景——水面倒影是菲萊獨有的畫面！下午斜光最能拍出浮雕的立體感。｜🤳 趣味構圖：走進巨柱廊，利用柱子排列的延伸感拍出「時空隧道」效果。站在柱子之間探頭也很有趣。｜👥 團體照：第一塔門前面空間大，全團可以輕鬆同框。",
        deepContent: {
          stories: [
            { title: "伊西斯與奧西里斯的愛情", text: "奧西里斯被弟弟賽特殺害並分屍成十四塊散落各地。妻子伊西斯走遍全埃及尋回每一塊遺體，用魔法將他復活。傳說奧西里斯的一部分就葬在菲萊島附近，因此這座島成為古埃及最神聖的朝聖地，象徵「死而復生」的永恆力量。" },
            { title: "最後的象形文字", text: "古埃及人所寫的最後一批象形文字（約西元 394 年）就刻在菲萊神廟牆上。這裡也是最後運作的古埃及神廟，直到拜占庭皇帝查士丁尼一世（527-565 AD）下令關閉所有異教神廟為止。" },
          ],
          highlights: [
            { icon: "🌙", text: "聲光秀 — 夜晚搭船前往小島，神廟在燈光下倒映河面，搭配伊西斯故事旁白，極為夢幻" },
            { icon: "📝", text: "最後的象形文字 — 這裡是 4,000 年象形文字書寫傳統的終結之地" },
          ],
          food: [
            { name: "Al Dokka Restaurant", desc: "尼羅河畔家族餐廳（1993 年至今），招牌努比亞咖啡" },
            { name: "Chef Khalil", desc: "亞斯文老城區，新鮮尼羅河鱸魚、魚湯配蝦和魷魚" },
          ],
        },
        duelCards: [
          { cardName: "歐西里斯的天空龍", cardNameEn: "Slifer the Sky Dragon", connection: "整座菲萊神廟講述的就是伊西斯復活歐西里斯的故事。牆上滿是歐西里斯的浮雕——死而復生的冥界之神。天空龍以歐西里斯為名，代表神聖的審判力量。", photoTip: "找到神廟內歐西里斯的浮雕（通常是綠色皮膚、手持連枷和權杖的神像），手持天空龍卡在浮雕旁合影。" },
        ],
      },
      {
        zh: "尼羅河風帆船 Felucca",
        en: "Felucca Sail on the Nile",
        arabic: "فلوكة",
        arabicRoman: "Falūka",
        description: "搭乘傳統三角帆船悠遊尼羅河，完全依靠風力航行，是阿斯旺最浪漫的體驗。可欣賞沿岸沙丘、棕櫚樹、努比亞村落與夕陽。航程約 1–2 小時。",
        photoTips: "🔥 必拍：夕陽下三角帆船的剪影，是尼羅河最經典的畫面。可以拍其他帆船在遠方的剪影。｜🤳 趣味構圖：坐在船頭腳伸出船邊，以三角帆+夕陽為背景拍出度假感。或躺在船上仰拍帆布+天空。｜👥 團體照：全團坐船上以尼羅河+夕陽為背景。⚠️ 船會搖，手機掛繩很重要！",
        deepContent: {
          stories: [
            { title: "太陽神的船", text: "古埃及人相信太陽神拉每天乘船穿越天空，夜晚在冥界河流上航行。搭乘 Felucca 某種程度上是在重現這個千年神話意象。Felucca 本身有上千年歷史，至今仍在尼羅河上使用。" },
          ],
          highlights: [
            { icon: "🍳", text: "船上烹飪 — 船員有時會在船上煮當地餐食，品質往往比許多餐廳更好" },
            { icon: "🌅", text: "日落時段最佳 — 金色光芒灑在沙丘和貴族墓群上的倒影，是最經典的畫面" },
            { icon: "⛵", text: "完全無動力 — 沒有風就只能慢慢漂，這也是 Felucca 的魅力——快不了，只能放鬆" },
          ],
          food: [],
        },
      },
      {
        zh: "努比亞村落",
        en: "Nubian Village",
        arabic: "القرية النوبية",
        arabicRoman: "Al-Qaryah al-Nūbiyah",
        description: "搭摩托船前往阿斯旺西岸的努比亞傳統村落。色彩繽紛的房屋牆面塗滿藍、黃、粉紅色彩，是努比亞文化的特色。可與村民養的小鱷魚合照、品嚐道地努比亞茶（Karkade 洛神花茶）、選購手工藝品。",
        photoTips: "🔥 必拍：彩色房屋牆面怎麼拍都像調過色，黃昏暖光下更飽和。和小鱷魚合照是努比亞限定！｜🤳 趣味構圖：找一面亮藍色或亮黃色牆面，穿對比色衣服站在前面超搶眼。門口的彩繪也值得特寫。｜👥 團體照：找一面大面積彩色牆排開，8 個人剛好。⚠️ 拍村民前先問，給 10–20 EGP。",
        deepContent: {
          stories: [
            { title: "沉入水底的家園", text: "努比亞人是非洲最古老的文明之一，他們的王國曾統治過埃及（第 25 王朝）。1960 年代亞斯文高壩建設時，超過 10 萬努比亞人被迫遷離家園，許多古老村落永沉水底。現在的村落是重建後的社區，但他們頑強保存了自己的語言、音樂和傳統。" },
            { title: "鱷魚守護傳說", text: "努比亞人相信鱷魚能驅除邪眼，因此幾乎每家門口都會掛著鱷魚乾屍或標本，有些家庭甚至養活鱷魚。這與康翁波神廟祭祀鱷魚神索貝克的傳統一脈相承。" },
          ],
          highlights: [
            { icon: "🎨", text: "海娜紋身（Henna Tattoo）— 努比亞婦女的海娜手藝是當地特色，可現場體驗" },
            { icon: "🗣️", text: "努比亞語 — 他們有自己的語言（不是阿拉伯語），至今日常使用，可以請當地人教幾句" },
            { icon: "🏠", text: "家庭拜訪 — 接受邀請進入當地家庭喝茶，是最道地的體驗，努比亞人以極度好客著稱" },
          ],
          food: [
            { name: "努比亞太陽麵包（Shamsi Bread）", desc: "當地婦女手工製作，麵團放在太陽下發酵再烘烤，被譽為「世界上最好吃的麵包之一」" },
            { name: "Karkade 洛神花茶", desc: "亞斯文特產！深紅色洛神花乾泡製，酸甜花香，市集可大量購買" },
          ],
        },
      },
    ],
    meals: { breakfast: "飯店", lunch: "郵輪", dinner: "郵輪" },
    hotel: "尼羅河郵輪 EL MAHROUSA（標準船型）",
    details: ["登上尼羅河郵輪 EL MAHROUSA", "開始 3 晚郵輪之旅"],
  },
  {
    day: 6,
    date: "04/07 (二)",
    title: "阿布辛貝 & 康翁波神廟",
    subtitle: "拉美西斯二世的偉大傑作",
    departureTime: "04:00 出發",
    attractions: [
      {
        zh: "阿布辛貝大神殿",
        en: "Great Temple of Abu Simbel",
        arabic: "معبد أبو سمبل",
        arabicRoman: "Maʿbad Abū Simbel",
        description: "拉美西斯二世於公元前 1264 年下令建造的巨型岩窟神殿。門口四座高 20 公尺的法老坐像極為壯觀。每年 2/22 和 10/22 太陽光會直射神殿最內部的聖所（太陽節）。同樣因阿斯旺大壩而由 UNESCO 主導遷移，是人類史上最偉大的考古搬遷工程之一。",
        photoTips: "🔥 必拍：四座 20 公尺高的法老坐像，站在腳邊拍才知道有多巨大。清晨到的話納瑟湖方向有柔光。｜🤳 趣味構圖：模仿法老的姿勢（雙手放膝蓋、正襟危坐）站在巨像旁邊拍對比。也可以拍「靠在法老腳趾上」。｜👥 團體照：神殿正面廣場，早到搶拍避開大批遊輪團。⚠️ 禁閃光燈。",
        deepContent: {
          stories: [
            { title: "太陽奇蹟", text: "每年只有 2/22 和 10/22，清晨第一道陽光會穿過 60 公尺長的走廊，精準照亮聖所中的三尊神像。但冥界之神普塔永遠處在陰影中——因為他是黑暗之神。這兩個日期據信是拉美西斯二世的生日和加冕日。3,300 年前的建築師精確計算了太陽軌跡才實現此天文奇蹟。" },
            { title: "UNESCO 世紀搬遷", text: "1960 年代高壩將使神殿沉入水下 60 公尺。超過 50 國出資約 8,000 萬美元，將整座神殿切成 1,035 塊巨石（每塊平均 20 噸），搬到高 65 公尺、後退 200 公尺的新位置重組。特別從義大利請來大理石切割專家用手鋸作業。此工程直接促成了 UNESCO 1972 年《世界遺產公約》的制定。" },
          ],
          highlights: [
            { icon: "👶", text: "腳邊小雕像 — 四尊巨像腳邊的小型雕像是拉美西斯的妻子和子女，容易被忽略" },
            { icon: "⚔️", text: "內殿浮雕 — 描繪卡德墟戰役，拉美西斯一人駕戰車衝入敵陣的英雄場景" },
            { icon: "📅", text: "搬遷後日期偏移 — 因位置微調，太陽奇蹟日期比原來偏移了一天" },
          ],
          food: [],
        },
        duelCards: [
          { cardName: "太陽神的翼神龍", cardNameEn: "The Winged Dragon of Ra", connection: "阿布辛貝的太陽奇蹟——每年兩次太陽光精準穿過 60 公尺走廊照亮太陽神拉的雕像。整座神殿就是獻給太陽神的祭壇。翼神龍以太陽神拉為名，是三幻神中最強的存在。", photoTip: "在神殿正面四座 20 公尺巨像前，手持翼神龍卡仰拍——讓卡片與太陽同框，重現太陽神降臨的氣勢。清晨光線最佳。" },
        ],
      },
      {
        zh: "阿布辛貝小神殿（奈菲爾塔莉神殿）",
        en: "Small Temple of Abu Simbel (Temple of Nefertari)",
        arabic: "معبد أبو سمبل الصغير",
        arabicRoman: "Maʿbad Abū Simbel aṣ-Ṣaghīr",
        description: "拉美西斯二世為愛妻奈菲爾塔莉所建，是古埃及極少數獻給王后的神殿。門口六座立像中有兩座是奈菲爾塔莉，且與法老等高——這在古埃及是前所未見的榮譽。",
        photoTips: "🔥 必拍：退後到能同時拍到大小神殿的距離，兩座同框很有氣勢。｜🤳 趣味構圖：站在奈菲爾塔莉立像旁邊比美，她可是古埃及最美的王后。｜👥 團體照：正面較窄，站兩排或 V 字型排列。",
        deepContent: {
          stories: [
            { title: "太陽為之照耀的人", text: "拉美西斯二世在位 67 年，擁有超過 150 個子女和眾多妻妾，但奈菲爾塔莉始終是他心中最特別的人。神殿銘文寫道：「為偉大的王后而建，太陽為她而照耀，賜予生命與愛。」他稱她為「太陽為之照耀的人」。" },
            { title: "墓室裡的情詩", text: "奈菲爾塔莉去世後，拉美西斯在她的墓室牆壁上寫了一首愛情詩。這對一個法老來說極不尋常——法老刻的通常是戰功和神蹟，而不是情詩。" },
          ],
          highlights: [
            { icon: "👑", text: "史無前例的平等 — 正面六尊雕像中王后與法老幾乎等高，古埃及通常王后雕像只到法老膝蓋" },
          ],
          food: [],
        },
      },
      {
        zh: "康翁波神廟（鱷魚神殿）",
        en: "Kom Ombo Temple",
        arabic: "معبد كوم أمبو",
        arabicRoman: "Maʿbad Kōm Ombō",
        description: "世界上獨一無二的雙神殿，左右完全對稱，同時供奉鱷魚神索貝克（Sobek）與鷹頭神荷魯斯（Horus）。建於托勒密王朝（約公元前 180 年）。附設的鱷魚博物館展出數十具鱷魚木乃伊。神殿牆上還刻有古代醫療器具圖案，被認為是世界上最早的「醫學教科書」之一。",
        photoTips: "🔥 必拍：鱷魚博物館裡的鱷魚木乃伊超獵奇必拍。牆上的古代醫療器具浮雕也很特別。｜🤳 趣味構圖：走到雙柱廊中間正中央，利用完美對稱構圖拍出一點不到的延伸感。｜👥 團體照：神殿正面台階，如果是日落時段砂岩會變金色，背景超美。",
        deepContent: {
          stories: [
            { title: "鱷魚神的矛盾身份", text: "索貝克有時被視為混沌之神賽特的盟友（賽特的追隨者曾變身鱷魚逃跑），但另一些教派認為索貝克是世界的創造者，從原始黑暗的水中升起創造了宇宙。因為他與尼羅河相關（傳說河水是他的汗水），也是豐饒之神。" },
            { title: "活鱷魚崇拜", text: "古埃及人在神廟聖池中飼養活鱷魚，視為索貝克的地上化身。祭司每天餵食肉類、麵包和酒。鱷魚死後會被做成木乃伊，使用與人類相同的防腐技術。" },
          ],
          highlights: [
            { icon: "🐊", text: "5 公尺長鱷魚木乃伊 — 鱷魚博物館鎮館之寶，周圍放了超過 300 具幼鱷木乃伊，可能代表母鱷與幼崽一同進入來世" },
            { icon: "🔪", text: "古代外科手術器械 — 牆上刻有人類已知最早的手術刀、鑷子、探針等圖像" },
            { icon: "📏", text: "尼羅河水位計 — 用階梯和刻度測量水位，預測洪水或乾旱，決定當年稅收" },
            { icon: "🗣️", text: "神諭密道 — 聖所後方有地下通道，祭司藏在裡面扮演神諭回答朝聖者問題——古代的「神蹟製造機」" },
          ],
          food: [],
        },
      },
    ],
    meals: { breakfast: "郵輪（打包車上享用）", lunch: "郵輪", dinner: "郵輪" },
    hotel: "尼羅河郵輪 EL MAHROUSA（標準船型）",
    details: [
      "清晨出發前往阿布辛貝（車程約 3.5 小時）",
      "回阿斯旺搭郵輪午餐後參觀康翁波神廟",
    ],
  },
  {
    day: 7,
    date: "04/08 (三)",
    title: "艾德福神殿 & 盧克索神殿",
    subtitle: "馬車遊覽 & 夜訪盧克索",
    departureTime: "09:00 出發",
    attractions: [
      {
        zh: "艾德福神殿（荷魯斯神殿）",
        en: "Edfu Temple (Temple of Horus)",
        arabic: "معبد إدفو",
        arabicRoman: "Maʿbad Idfū",
        description: "全埃及保存最完整的古神殿，建於托勒密三世時期（公元前 237 年），歷時 180 年完工。供奉鷹頭神荷魯斯，36 公尺高的第一塔門是全埃及第二大。牆上刻有荷魯斯與賽特（Set）的戰鬥神話完整故事。搭馬車從碼頭前往神殿，車程約 10 分鐘。",
        photoTips: "🔥 必拍：入口處的巨型荷魯斯黑色鷹像，是全埃及最上鏡的雕像之一。大廳抬頭拍天花板殘存的古老彩繪。⚠️ 禁閃光燈。｜🤳 趣味構圖：站在荷魯斯鷹像旁邊模仿牠的站姿（雙手貼身、挺胸），超好笑又有紀念價值。｜👥 團體照：36 公尺高的第一塔門前，全團在巨牆下顯得很渺小。",
        deepContent: {
          stories: [
            { title: "荷魯斯 vs 賽特的史詩復仇", text: "賽特謀殺兄弟歐西里斯篡位，荷魯斯發起復仇之戰。牆上描繪最終決戰：賽特變身河馬，荷魯斯站在船上用魚叉刺穿牠。藝術家故意把賽特畫得很小——古埃及的「政治正確」，用視覺矮化敵人。古埃及人每年在此重演這場大戰。" },
            { title: "神聖婚禮慶典", text: "每年最盛大的慶典是荷魯斯神像從艾德福出發，與從丹德拉遠道而來的哈索爾女神像舉行象徵性婚禮，代表宇宙的豐饒與和諧。" },
          ],
          highlights: [
            { icon: "🎨", text: "殘存原始色彩 — 因被沙漠埋藏數百年，部分浮雕仍保留顏色——天花板藍色、走廊紅色，別只顧看石頭" },
            { icon: "⭐", text: "圖書室天花板星座圖 — 部分保存的黃道帶裝飾，很多遊客直接走過不會抬頭看" },
            { icon: "🔊", text: "神諭密室 — 祭司藏在隱藏密室製造神秘音效，以「神的聲音」說話——古代版音響系統" },
          ],
          food: [],
        },
      },
      { zh: "郵輪駛往盧克索", en: "Cruise sails to Luxor", isActivity: true },
      {
        zh: "盧克索神殿（夜間參觀）",
        en: "Luxor Temple (Night Visit)",
        arabic: "معبد الأقصر",
        arabicRoman: "Maʿbad al-Aqṣar",
        description: "建於公元前 1400 年的阿蒙霍特普三世時期，後由拉美西斯二世擴建。入口處的拉美西斯二世坐像與方尖碑（另一座現存於巴黎協和廣場）是標誌性景觀。2.7 公里長的獅身人面大道連接至卡納克神殿。夜間打燈後金色砂岩在暗夜中閃耀，是盧克索最壯觀的夜景。",
        photoTips: "🔥 必拍：夜間打燈是盧克索神殿的精華！暖色光讓砂岩變成金色。最推黃昏天色從藍變紫那一刻＋打燈的組合。獅身人面大道也必拍。｜🤳 趣味構圖：站在柱廊中間，利用重複柱子的透視感拍出「無盡延伸」。或站在拉美西斯坐像腳邊對比大小。｜👥 團體照：獅身人面大道入口處兩排石像之間，超有儀式感。",
        deepContent: {
          stories: [
            { title: "3,400 年不間斷的宗教聖地", text: "盧克索神殿先是古埃及神殿（前 1400 年），接著被改為基督教教堂（395 年），再改建為清真寺（640 年）。三個宗教、一個地點、3,400 年從未中斷——至今 Abu Haggag 清真寺仍活躍使用，坐落在古柱之上。" },
            { title: "歐佩特節慶典", text: "古埃及最重要的宗教慶典——阿蒙神、妻子穆特和兒子孔蘇的神像從卡納克沿獅身人面大道盛大遊行到盧克索神殿，場面浩大。" },
            { title: "亞歷山大大帝到此一遊", text: "神殿後方有亞歷山大大帝建造的花崗岩小神殿，標誌著希臘與埃及文明的交匯。" },
          ],
          highlights: [
            { icon: "🕌", text: "清真寺與神殿的時空交錯 — 站在古埃及石柱旁往上看清真寺宣禮塔，是全埃及最超現實的畫面" },
            { icon: "🌙", text: "夜間人潮少 — 可以更從容地欣賞打燈效果和細節" },
          ],
          food: [
            { name: "Sofra Restaurant & Café", desc: "1930 年代老宅改建，盧克索最受推薦。推薦 Daooud Basha（肉丸番茄燉）、Hamam Mahshi（釀鴿子）" },
            { name: "Al-Sahaby Lane", desc: "1930 年創立的家族餐廳，戶外座位感受盧克索街頭氛圍" },
          ],
        },
        duelCards: [
          { cardName: "歐貝利斯克的巨神兵", cardNameEn: "Obelisk the Tormentor", connection: "盧克索神殿入口的方尖碑（Obelisk）正是巨神兵名稱的由來。原本有兩座，另一座被送到巴黎協和廣場。方尖碑是法老權力的象徵，正如巨神兵代表壓倒性的力量。", photoTip: "站在入口方尖碑正下方仰拍，手持巨神兵卡對齊方尖碑尖端——夜間打燈效果更震撼。" },
        ],
      },
    ],
    meals: { breakfast: "郵輪", lunch: "郵輪", dinner: "郵輪" },
    hotel: "尼羅河郵輪 EL MAHROUSA（標準船型）",
    details: ["搭馬車前往艾德福神殿", "晚上參觀盧克索神殿"],
  },
  {
    day: 8,
    date: "04/09 (四)",
    title: "盧克索西岸 & 飛回開羅",
    subtitle: "帝王谷、孟農神像、卡納爾神殿",
    departureTime: "09:00 出發",
    attractions: [
      {
        zh: "熱氣球日出（自費）",
        en: "Hot Air Balloon Sunrise (optional)",
        description: "清晨搭乘熱氣球升空至 300 公尺高空，俯瞰尼羅河西岸全景——帝王谷、哈乏謝普蘇特女王神殿、孟農神像與翠綠農田盡收眼底。飛行時間約 45 分鐘，含接送共約 3–4 小時。不搭乘的旅客可在飯店休息。天候不佳可能取消。",
        photoTips: "🔥 必拍：日出時其他氣球漂浮在金色天空中的畫面，手機隨便拍都是桌布等級。往下俯拍帝王谷的山脈紋理和翠綠農田也超震撼。｜🤳 趣味構圖：火焰噴射瞬間連拍，火光+天空+氣球布超帥。伸手做「觸摸太陽」的姿勢。｜👥 團體照：在吊籃裡擠一起以全景為背景。⚠️ 高空風大，手機一定要掛繩！用連拍模式。",
      },
      {
        zh: "帝王谷",
        en: "Valley of the Kings",
        arabic: "وادي الملوك",
        arabicRoman: "Wādī al-Mulūk",
        description: "古埃及新王國時期（公元前 1539–1075 年）的法老陵墓群，藏於尼羅河西岸的山谷中。目前已發現 63 座墓穴，其中最著名的是圖坦卡門墓（KV62，需額外購票）。基本門票可參觀 3 座墓穴，每座墓內都有精美的壁畫。建議早上 7–8 點抵達避開大量遊輪團客（約 10 點到達）。",
        photoTips: "🔥 必拍：墓穴內的彩色壁畫保存驚人，用手機廣角模式拍天花板整面壁畫。山谷外荒涼的月球地貌也很值得拍。⚠️ 全面禁閃光燈、禁腳架。｜🤳 趣味構圖：站在墓穴入口處回望，一半陽光一半陰影的光影對比很戲劇性。｜👥 團體照：遊客中心前方有山谷全景，適合拍到背後整片荒山。",
        deepContent: {
          stories: [
            { title: "「Yes, wonderful things.」", text: "1922 年 11 月，Carter 在資助者即將斷糧的最後一季挖掘中發現了圖坦卡門墓。當他從小洞窺視墓室內部，Lord Carnarvon 問「你看到什麼了？」Carter 回答了那句震驚世界的話。" },
            { title: "金絲雀與眼鏡蛇", text: "Carter 在挖掘季買了一隻金絲雀，工人視為好運象徵。但後來一條眼鏡蛇闖入住所吃掉了金絲雀——工人驚恐地認為是法老額頭上的守護蛇發出的詛咒警告。" },
          ],
          highlights: [
            { icon: "👑", text: "KV17 塞提一世墓 — 帝王谷最長（450 英尺）、公認最壯觀的墓室，需另購票但最值得" },
            { icon: "🎨", text: "KV9 拉美西斯五世/六世墓 — 巨大墓室、鮮豔壁畫，通常人比較少" },
            { icon: "📸", text: "2026 年起手機可免費拍照 — 不再需要另購攝影通行證" },
          ],
          food: [],
        },
        duelCards: [
          { cardName: "黑暗大法師", cardNameEn: "Dark Magician", connection: "帝王谷墓穴壁畫中大量描繪祭司為法老施行通往來世的魔法儀式——這正是黑暗大法師的原型。祭司手持權杖、唸誦咒語的場景，與黑暗大法師的形象如出一轍。", photoTip: "在墓穴壁畫中找到祭司施法的場景，手持黑暗大法師卡對照拍攝。注意禁閃光燈！" },
          { cardName: "黑魔導女孩", cardNameEn: "Dark Magician Girl", connection: "作為黑暗大法師的弟子，在古埃及的脈絡中對應著祭司傳承體系。墓穴壁畫中也有女性參與祭祀儀式的場景。", photoTip: "找到有女性神祇或女祭司的壁畫段落拍攝。" },
        ],
      },
      {
        zh: "孟農神像",
        en: "Colossi of Memnon",
        arabic: "تمثالا ممنون",
        arabicRoman: "Timthālā Mamnūn",
        description: "兩座高 18 公尺、重約 720 噸的阿蒙霍特普三世石像，矗立於尼羅河西岸農田中。原為其祭殿的入口守衛，祭殿已毀但雙像屹立 3,400 年。免費開放參觀，通常停留 20–30 分鐘。古希臘人相信北側石像會在黎明「唱歌」（因熱脹冷縮發出聲音）。",
        photoTips: "🔥 必拍：手機蹲低仰拍，18 公尺的石像在畫面中頂天立地，壓迫感十足。｜🤳 趣味構圖：站在石像腳邊張開手臂，對比人和巨像的大小差距。或假裝和石像「擊掌」。｜👥 團體照：站在兩座石像正中間，左右各一座巨像夾道，超有氣勢。",
        deepContent: {
          stories: [
            { title: "會唱歌的石像", text: "公元前 27 年地震震裂了北邊石像，此後每天黎明發出哀鳴。科學解釋是溫差導致露水蒸發的聲響，但希臘人相信是特洛伊英雄門農在向黎明女神母親問好，清晨露珠則是母親的眼淚。" },
            { title: "修好了反而毀了", text: "公元 199 年羅馬皇帝塞維魯斯下令修復石像，將斷裂部分重新接合——結果石像再也不唱歌了。修好了反而毀了最珍貴的特色。" },
            { title: "哈德良的悲傷朝聖", text: "公元 130 年羅馬皇帝哈德良前來聆聽「唱歌的石像」。幾週前他深愛的伴侶安提諾烏斯剛在尼羅河溺斃。隨行女詩人用古希臘方言在石像左腿上刻下四首詩，至今仍可見。" },
          ],
          highlights: [
            { icon: "📝", text: "古代 TripAdvisor — 石像上有 107 條羅馬時代的希臘文和拉丁文刻字，是世界最早的旅遊評論" },
            { icon: "🏛️", text: "冰山一角 — 兩座石像原是古埃及最大陪葬神殿的入口，大部分已毀，目前持續挖掘中" },
          ],
          food: [],
        },
      },
      {
        zh: "卡納爾神殿",
        en: "Karnak Temple Complex",
        arabic: "معبد الكرنك",
        arabicRoman: "Maʿbad al-Karnāk",
        description: "古埃及最大的神殿群，佔地超過 200 英畝，歷經約 30 位法老、2,000 年持續擴建（公元前 2055–100 年）。最震撼的是大柱廳（Great Hypostyle Hall）——134 根巨柱高達 23 公尺，上面刻滿象形文字。神殿旁的聖湖可拍到柱廊與方尖碑的水面倒影。建議停留 2–3 小時。",
        photoTips: "🔥 必拍：大柱廳 134 根巨柱是全埃及最震撼的畫面，手機超廣角模式拍出滿滿柱海。聖湖邊拍柱廊+方尖碑的水面倒影也超美。｜🤳 趣味構圖：站在一根巨柱旁邊，手環抱柱子——柱子直徑比人還寬！或站在柱列中間拍出無盡延伸的透視感。｜👥 團體照：第一塔門前或聖湖畔，空間大適合大合照。",
        deepContent: {
          stories: [
            { title: "原始沼澤的象徵", text: "134 根巨柱象徵創世之初的原始沼澤。中央 12 根大柱高達 21 公尺（約 7 層樓），代表紙莎草叢，是阿蒙神聖船通過的通道。大列柱廳中央比兩側高，形成人類建築史上已知最早的天窗採光設計。" },
            { title: "兩位法老的藝術之爭", text: "北半部由塞提一世以精美凸浮雕裝飾，南半部由拉美西斯二世完成。拉美西斯的工匠一開始模仿父親風格，很快改用更快速的凹浮雕，甚至把父親已完成的部分也改掉——同一空間留下了截然不同的藝術風格。" },
            { title: "人類最早的和平條約", text: "南牆刻有拉美西斯二世與西臺帝國簽訂的和平條約，是人類歷史上已知最早的國際和平條約之一。" },
          ],
          highlights: [
            { icon: "🪲", text: "聖甲蟲許願石 — 聖湖旁的玫瑰花崗岩聖甲蟲雕像，繞 3 圈好運、7 圈求愛情、9 圈求子嗣" },
            { icon: "🎨", text: "柱頂殘存彩繪 — 蓮花柱頭下方仍有原始顏料，當年整座列柱廳都是五彩繽紛的" },
            { icon: "💧", text: "聖湖 — 祭司每天在此淨化，是神殿宗教生活的核心" },
          ],
          food: [],
        },
        duelCards: [
          { cardName: "太陽神的翼神龍", cardNameEn: "The Winged Dragon of Ra", connection: "卡納克整座神殿群供奉 Amun-Ra（阿蒙-拉），是太陽神在地上最偉大的居所。大柱廳 134 根巨柱象徵太陽神船穿越的原始沼澤。翼神龍以拉為名，這裡就是祂的聖殿。", photoTip: "在大柱廳中央，陽光從高側窗灑下時手持翼神龍卡——光柱打在卡片上的效果如同神降臨。" },
          { cardName: "歐貝利斯克的巨神兵", cardNameEn: "Obelisk the Tormentor", connection: "卡納克神殿內有哈乏謝普蘇特女王的方尖碑，是全埃及現存最高的方尖碑之一。方尖碑（Obelisk）就是巨神兵的名稱來源。", photoTip: "站在方尖碑下方，手持巨神兵卡仰拍——讓卡片與方尖碑尖端同框。" },
        ],
      },
      { zh: "搭機飛回開羅", en: "Flight back to Cairo", isActivity: true },
    ],
    meals: { breakfast: "郵輪", lunch: "當地餐廳" },
    hotel: "Hilton Cairo Grand Nile",
    details: [
      "自費項目：熱氣球（不搭乘的旅客可在飯店休息）",
      "下午前往機場搭乘開羅航班",
    ],
  },
  {
    day: 9,
    date: "04/10 (五)",
    title: "自由活動 & 返程",
    subtitle: "帶著滿滿回憶回家",
    departureTime: "自由活動",
    attractions: [
      { zh: "早餐後自由活動", en: "Free time after breakfast", isActivity: true },
      { zh: "含專車及午餐（不含導遊，有助理陪同）", en: "Car & lunch included, assistant provided (no guide)", isActivity: true },
      { zh: "前往機場搭乘國際航班回國", en: "Transfer to airport for international flight", isActivity: true },
    ],
    meals: { breakfast: "飯店", lunch: "含午餐" },
    hotel: "—",
    details: ["包含車和午餐", "不含導遊，會安排助理"],
  },
];

export const inclusions = [
  "開羅住宿（4 晚）— DOU DOU HOTEL 1 晚 + Hilton Cairo Grand Nile 3 晚",
  "沙漠星空飯店住宿（1 晚）",
  "尼羅河郵輪 EL MAHROUSA（3 晚，標準船型）",
  "埃及內陸機票（開羅↔阿斯旺、盧克索↔開羅）",
  "全程交通車費（按行程表）",
  "所有景點門票",
  "騎駱駝費用 & 駱駝小費",
  "每日三餐（最後一天不含晚餐）——午、晚餐安排埃及當地風味餐或中餐",
  "每天每人一瓶水",
  "中文導遊",
  "導遊小費",
  "司機小費",
];

export const exclusions = [
  "國際機票",
  "落地簽證費 USD $30（現金）",
  "熱氣球、出海、浮潛等自費項目",
];

export const importantNotes = [
  {
    category: "簽證",
    items: [
      "埃及落地簽，需準備：護照正本（效期 6 個月以上）、簽證費 USD $30 現金",
    ],
  },
  {
    category: "上海轉機",
    items: [
      "台灣護照在上海轉機，即使不入境也需持有效台胞證（卡式，效期 5 年）",
      "建議出發前在台灣先辦好卡式台胞證，勿依賴機場辦一次性落地簽（排隊久、有被拒風險）",
      "聯程機票行李可直掛，不需提領再重掛（建議報到時與航空公司確認）",
    ],
  },
  {
    category: "貨幣",
    items: [
      "埃及鎊 (EGP)，建議攜帶美金現鈔在當地兌換",
      "大部分觀光區可刷卡，但市集建議用現金",
    ],
  },
  {
    category: "天氣",
    items: [
      "4 月氣溫約 20-35°C，日夜溫差大",
      "沙漠地區夜晚偏涼，建議攜帶薄外套",
      "防曬用品必備：帽子、太陽眼鏡、防曬乳",
    ],
  },
  {
    category: "穿著",
    items: [
      "參觀清真寺需著長袖長褲，女性需披頭巾",
      "建議穿舒適好走的鞋子",
      "沙漠行程建議穿長褲防風沙",
    ],
  },
  {
    category: "健康",
    items: [
      "建議攜帶腸胃藥、防蚊液",
      "飲用水請購買瓶裝水",
      "建議投保海外旅遊平安險",
    ],
  },
  {
    category: "行李",
    items: [
      "埃及內陸航班行李限制：托運 23 KG + 手提 7 KG 小包",
    ],
  },
  {
    category: "行李遺失",
    items: [
      "若行李在機場遺失或未抵達開羅，請在機場行李服務櫃台填寫申報單，並留下以下聯絡資訊：",
      "📍 地址：Giza, Hadiek October, Compound Golf Residence, Building No. 28",
      "📞 電話：+20 100 096 4509",
    ],
  },
  {
    category: "小費 Baksheesh",
    items: [
      "小費（baksheesh）是埃及文化重要的一部分，建議用埃及鎊（EGP）支付，避免使用外幣硬幣或 1 美元紙鈔（當地無法兌換）",
      "✅ 導遊、司機、駱駝小費已含在團費中，不需另付",
      "郵輪服務人員：約 USD $10/人/晚（可於下船時統一給予）",
      "飯店行李員：10–20 EGP/件；房務清潔：20–50 EGP/晚（放枕頭上）",
      "餐廳：帳單如已含 10–15% 服務費，可再加 5–10% 現金；小餐廳湊整數即可",
      "廁所管理員：5–10 EGP",
      "建議出發前多準備小面額埃及鎊（5、10、20 EGP），方便隨手給小費",
    ],
  },
  {
    category: "電壓與插座",
    items: [
      "埃及使用 Type C 歐規雙圓孔插座，電壓 220V / 50Hz",
      "台灣電器（110V）需攜帶轉接頭，建議帶萬用轉接頭",
      "手機充電器通常支援 100–240V 不需變壓器，但請確認充電器上的標示",
    ],
  },
];

export const emergencyContacts = [
  { category: "埃及緊急電話", items: [
    { label: "報警", number: "122" },
    { label: "救護車", number: "123" },
    { label: "消防", number: "180" },
    { label: "觀光警察", number: "126" },
  ]},
  { category: "台灣駐外代表處（兼理埃及）", items: [
    { label: "駐約旦臺北經濟文化辦事處", number: "+(962-6) 554-4426" },
    { label: "急難救助手機", number: "+962-79-555-2605" },
    { label: "Email", number: "jor@mofa.gov.tw" },
  ]},
  { category: "旅行社當地聯絡", items: [
    { label: "埃及豆豆旅行", number: "+20 100 096 4509" },
    { label: "Email", number: "Mohamed@egyptdoudou.com" },
  ]},
  { category: "外交部旅外救助", items: [
    { label: "全球免付費專線", number: "0800-085-095" },
    { label: "海外付費專線", number: "+886-800-085-095" },
  ]},
];

export const arabicPhrases = [
  { zh: "你好", arabic: "السلام عليكم", roman: "Es-salamu aleiku", note: "正式問候" },
  { zh: "你好（簡單）", arabic: "أهلاً", roman: "Ahlan", note: "日常打招呼" },
  { zh: "謝謝", arabic: "شكراً", roman: "Shukran", note: "最常用的一句" },
  { zh: "不用謝", arabic: "عفواً", roman: "Afwan", note: "" },
  { zh: "對不起", arabic: "آسف", roman: "Aasif", note: "" },
  { zh: "是 / 好的", arabic: "أيوه", roman: "Aywa", note: "埃及口語" },
  { zh: "不 / 不要", arabic: "لأ", roman: "La'", note: "拒絕推銷用" },
  { zh: "多少錢？", arabic: "بكام ده؟", roman: "Bikam da?", note: "指著東西問，da = 這個" },
  { zh: "太貴了！", arabic: "غالي أوي!", roman: "Ghali awi!", note: "殺價起手式" },
  { zh: "算便宜一點", arabic: "نقّص شوية", roman: "Naa'es shwaya", note: "接著殺價" },
  { zh: "好吃！", arabic: "لذيذ!", roman: "Lazeez!", note: "讚美食物" },
  { zh: "水", arabic: "مية", roman: "Mayya", note: "埃及口語" },
  { zh: "洗手間在哪？", arabic: "فين الحمام؟", roman: "Fein el-hammaam?", note: "" },
  { zh: "救命！", arabic: "النجدة!", roman: "El-nagda!", note: "緊急時用" },
  { zh: "好美！", arabic: "جميل أوي!", roman: "Gameel awi!", note: "讚美景點" },
  { zh: "再見", arabic: "مع السلامة", roman: "Ma'a es-salama", note: "最常用的道別" },
  { zh: "非常感謝你", arabic: "شكراً جزيلاً", roman: "Shukran gazeelan", note: "比 Shukran 更誠懇" },
  { zh: "祝福你", arabic: "ربنا يخليك", roman: "Rabbena yikhaleek", note: "願神保佑你" },
];

export const souvenirs = [
  {
    name: "紙莎草畫",
    price: "50–300 EGP",
    where: "哈里里市集、景點商店",
    tip: "真品用紙莎草製成（可折不會裂），假貨用香蕉葉（折了會碎）。買前折一下角測試",
  },
  {
    name: "香精油",
    price: "100–500 EGP",
    where: "香精店、哈里里市集",
    tip: "玫瑰、茉莉、蓮花最受歡迎。純天然香精無酒精成分，滴在手上不會快速揮發的是真貨",
  },
  {
    name: "埃及飾品（聖甲蟲、安卡符、荷魯斯之眼）",
    price: "50–400 EGP",
    where: "哈里里市集、景點攤販",
    tip: "銀飾注意看有無純銀標記（925）。鍍金的便宜但容易掉色",
  },
  {
    name: "埃及棉製品（圍巾、毛巾）",
    price: "100–300 EGP",
    where: "哈里里市集、購物中心",
    tip: "埃及棉（Egyptian Cotton）以長纖維聞名，觸感柔軟。圍巾自用送人都適合",
  },
  {
    name: "手工銅燈 / 銅盤",
    price: "200–1000 EGP",
    where: "哈里里市集銅器街",
    tip: "手工雕花的較貴但值得，機器壓印的較便宜。體積大注意行李空間",
  },
  {
    name: "雪花石膏工藝品",
    price: "100–500 EGP",
    where: "盧克索、阿斯旺商店",
    tip: "真品半透明可透光，用手電筒照會發光。常見的有花瓶、金字塔、法老像",
  },
  {
    name: "椰棗乾禮盒",
    price: "50–200 EGP",
    where: "家樂福超市、機場免稅店",
    tip: "超市買比景點店便宜一半以上。推薦帶餡的（杏仁、核桃）送人大方又好吃",
  },
  {
    name: "洛神花茶 Karkade",
    price: "30–100 EGP",
    where: "超市、香料店",
    tip: "埃及國民飲料，冷泡熱泡皆可。超市散裝最划算，香料店可順便買小茴香、番紅花",
  },
  {
    name: "黃金面具書籤",
    price: "約 300 EGP",
    where: "大埃及博物館紀念品店",
    tip: "博物館限定！精緻金屬書籤，送人自用都很有紀念價值，只有館內才買得到",
  },
  {
    name: "香料（小茴香、番紅花、肉桂）",
    price: "20–150 EGP",
    where: "哈里里市集香料攤、超市",
    tip: "市集買要殺價，超市有包裝好的。番紅花注意辨真假（真品顏色深紅、泡水會慢慢釋色）",
  },
];

export const bargainingTips = [
  {
    title: "開價永遠是 2–3 倍",
    desc: "觀光客聽到的第一個價格一定是灌水的，從開價的 1/3 開始還價是基本操作",
  },
  {
    title: "先逛不買，貨比三家",
    desc: "同樣的東西在不同攤位價差很大。第一圈先問價格、心裡有底，第二圈再出手",
  },
  {
    title: "Bikam? 用阿拉伯語問價",
    desc: "開口說「Bikam dah?（這個多少錢）」會讓店家覺得你不是第一次來，起始價可能就先低一截",
  },
  {
    title: "微笑但堅定",
    desc: "殺價在埃及是社交文化的一部分，保持友善態度但不要不好意思拒絕。笑著搖頭說 La'（不要）",
  },
  {
    title: "走人是最強武器",
    desc: "談不攏就說 Shukran（謝謝）然後轉身離開。80% 的情況店家會追出來喊更低的價格",
  },
  {
    title: "多件一起談折扣",
    desc: "買越多越好殺。跟店家說「我買三個，算便宜一點」通常會有意想不到的折扣",
  },
  {
    title: "傍晚收攤前最好殺",
    desc: "接近打烊時店家更願意降價出清。早上剛開門的第一筆生意（稱為 fatah）店家也會比較好說話",
  },
  {
    title: "只帶現金埃鎊，準備小面額",
    desc: "用埃鎊付款比美金更好殺價。帶小面額紙鈔（5、10、20 EGP），避免店家說「沒有零錢找」",
  },
];

export const weatherData: WeatherDay[] = [
  {
    day: 1,
    date: "04/02",
    location: "開羅 Cairo",
    high: 28,
    low: 20,
    condition: "早晨陣雨轉陰",
    conditionIcon: "🌦️",
    wind: "14 km/h",
    clothing: [
      { period: "白天", temp: "22–28°C", items: ["短袖或薄長袖", "長褲／長裙", "運動鞋"] },
      { period: "傍晚市集", temp: "~20°C", items: ["薄外套或罩衫", "舒適步行鞋"] },
    ],
    specialNotes: [
      { icon: "🌧️", text: "早上有陣雨機率！建議帶輕便雨具或摺疊傘" },
      { icon: "🕌", text: "清真寺須遮肩膀＋過膝，需包頭巾 — 帶大圍巾最萬用" },
      { icon: "👗", text: "穿長裙／寬褲直接一整天，進清真寺免換裝最省事" },
    ],
  },
  {
    day: 2,
    date: "04/03",
    location: "黑白沙漠",
    high: 27,
    low: 16,
    condition: "晴天",
    conditionIcon: "☀️",
    wind: "14 km/h",
    clothing: [
      { period: "白天沙漠", temp: "23–27°C", items: ["短袖", "長褲（防沙）", "遮陽帽", "墨鏡"] },
      { period: "夜間露營", temp: "~16°C", items: ["厚外套／輕羽絨", "長褲", "厚襪"] },
    ],
    specialNotes: [
      { icon: "🏕️", text: "沙漠夜晚降至 16°C，空曠地帶體感更冷，務必帶厚外套" },
      { icon: "🌬️", text: "風沙大，建議帶魔術頭巾遮口鼻" },
      { icon: "👟", text: "穿包覆式運動鞋，涼鞋和裙裝今天都不適合" },
    ],
  },
  {
    day: 3,
    date: "04/04",
    location: "開羅 Cairo",
    high: 26,
    low: 12,
    condition: "晴天",
    conditionIcon: "☀️",
    wind: "12 km/h",
    clothing: [
      { period: "白天", temp: "18–26°C", items: ["薄長袖或短袖", "長褲", "舒適步行鞋"] },
      { period: "傍晚", temp: "~14°C", items: ["薄外套"] },
    ],
    specialNotes: [
      { icon: "🌡️", text: "日夜溫差達 14°C，傍晚會明顯轉涼" },
      { icon: "🛍️", text: "逛購物中心室內冷氣強，帶薄外套" },
    ],
  },
  {
    day: 4,
    date: "04/05",
    location: "開羅·吉薩 Giza",
    high: 27,
    low: 13,
    condition: "晴天",
    conditionIcon: "☀️",
    wind: "20 km/h",
    clothing: [
      { period: "白天戶外", temp: "20–27°C", items: ["薄長袖", "長褲", "運動鞋", "遮陽帽"] },
      { period: "傍晚", temp: "~15°C", items: ["薄外套"] },
    ],
    specialNotes: [
      { icon: "🐪", text: "騎駱駝務必穿長褲 — 裙裝會磨腿，上下駱駝動作大易走光" },
      { icon: "🏜️", text: "金字塔區風沙大，備墨鏡" },
    ],
  },
  {
    day: 5,
    date: "04/06",
    location: "阿斯旺 Aswan",
    high: 32,
    low: 19,
    condition: "多雲",
    conditionIcon: "☁️",
    wind: "28 km/h",
    clothing: [
      { period: "白天", temp: "28–32°C", items: ["短袖或背心", "寬褲／長洋裝", "涼鞋或透氣鞋"] },
      { period: "傍晚帆船", temp: "~22°C", items: ["薄長袖備用"] },
    ],
    specialNotes: [
      { icon: "⛵", text: "風速 28 km/h，帆船河面風更強，帽子用繩固定、手機掛繩" },
      { icon: "🎨", text: "努比亞村彩色牆拍照超美！白色、藍色、黃色系衣服最上鏡" },
      { icon: "☀️", text: "南部紫外線極強，即使多雲仍須擦防曬乳 SPF50+" },
    ],
  },
  {
    day: 6,
    date: "04/07",
    location: "阿布辛貝→亞斯文",
    high: 38,
    low: 19,
    condition: "多雲",
    conditionIcon: "🌤️",
    wind: "8 km/h",
    clothing: [
      { period: "凌晨 4:00", temp: "~19°C", items: ["薄外套（車上易脫）", "長褲"] },
      { period: "白天", temp: "33–38°C", items: ["短袖", "遮陽帽", "墨鏡"] },
    ],
    specialNotes: [
      { icon: "🔥", text: "全程最熱！高達 38°C，務必大量補水、防中暑" },
      { icon: "⏰", text: "凌晨 4 點出發，車上可補眠，穿舒適易脫外套" },
      { icon: "📸", text: "法老像前拍照，飄逸裙裝或寬鬆襯衫效果很好" },
      { icon: "☀️", text: "全露天無遮蔽，防曬是重中之重" },
    ],
  },
  {
    day: 7,
    date: "04/08",
    location: "艾德福→盧克索",
    high: 33,
    low: 18,
    condition: "零星雲",
    conditionIcon: "🌤️",
    wind: "30 km/h",
    clothing: [
      { period: "白天", temp: "28–33°C", items: ["短袖", "輕薄長褲／長裙", "遮陽帽", "涼鞋"] },
      { period: "夜間神殿", temp: "~20°C", items: ["薄長袖或薄外套"] },
    ],
    specialNotes: [
      { icon: "🌬️", text: "風速 30 km/h，注意帽子固定、沙塵防護" },
      { icon: "🌡️", text: "高溫 33°C，注意防曬補水" },
      { icon: "🌙", text: "夜訪盧克索神殿，深色或白色穿搭配金色神殿超出片" },
    ],
  },
  {
    day: 8,
    date: "04/09",
    location: "盧克索→開羅 ✈",
    high: 31,
    low: 21,
    condition: "晴天",
    conditionIcon: "☀️",
    wind: "20 km/h",
    clothing: [
      { period: "白天帝王谷", temp: "28–31°C", items: ["短袖", "遮陽帽", "運動鞋"] },
      { period: "晚間開羅", temp: "~18°C", items: ["薄外套"] },
    ],
    specialNotes: [
      { icon: "👑", text: "帝王谷墓穴內悶熱，穿透氣衣物" },
      { icon: "✈️", text: "盧克索 31°C → 開羅 25°C，記得帶外套上飛機" },
    ],
  },
  {
    day: 9,
    date: "04/10",
    location: "開羅 Cairo",
    high: 26,
    low: 17,
    condition: "漸轉多雲",
    conditionIcon: "⛅",
    wind: "4 km/h",
    clothing: [
      { period: "白天", temp: "20–26°C", items: ["舒適便裝", "步行鞋"] },
    ],
    specialNotes: [
      { icon: "✈️", text: "最後一天，穿舒適搭機服裝即可" },
    ],
  },
];

export const packingChecklist: PackingItem[] = [
  {
    category: "上衣",
    icon: "👕",
    items: ["短袖 × 5–6", "薄長袖 × 2", "厚外套／輕羽絨 × 1", "薄外套 × 1"],
  },
  {
    category: "下身",
    icon: "👖",
    items: ["寬鬆透氣長褲 × 3–4", "長裙／長洋裝 × 1–2（拍照＋清真寺萬用）", "短褲 × 1（郵輪用）"],
  },
  {
    category: "鞋類",
    icon: "👟",
    items: ["運動鞋 × 1（主力）", "涼鞋 × 1（郵輪用）"],
  },
  {
    category: "配件",
    icon: "🧢",
    items: ["遮陽帽（有繩）", "墨鏡", "大圍巾（頭巾＋防曬＋披肩三用）", "魔術頭巾（防沙）", "防曬乳 SPF50+", "保濕乳液"],
  },
  {
    category: "其他",
    icon: "🎒",
    items: ["輕便後背包", "水壺", "面紙／濕紙巾", "口罩（防沙塵）"],
  },
];
