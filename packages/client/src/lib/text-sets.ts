export interface TextSet {
  name: string;
  headerEmoji: string;
  title: string;
  titleWithName: (name: string) => string;
  subtitle: string;
  yesButton: string;
  noMessages: string[];
  subTexts: Record<string, string>;
  successEmoji: string;
  successTitle: string;
  successBody: string;
  successBody2: string;
  successEmojis: string[];
  footer: string;
}

export const textSets: TextSet[] = [
  // ----- SET 1: TikTok / Gen-Z -----
  {
    name: "tiktok-genz",
    headerEmoji: "🐻✨",
    title: "POV : Tu veux être ma Valentine ? 🥺",
    titleWithName: (n) => `POV : ${n}, tu veux être ma Valentine ? 🥺`,
    subtitle: "J'ai une dinguerie à te demander...",
    yesButton: "Ouiii ! (c'est réel) 💕",
    noMessages: [
      "Flop total... 📉",
      "Wsh t'es sérieux ? 🤨",
      "Tu forces là... 💀",
      "Cringe de ouf 😬",
      "Mais wesh ?! 😤",
      "Je suis choquebar 😱",
      "C'est la hess... 🫠",
      "Dernière chance le S 🙏",
      "Allez fais pas genre 👀",
      "Je vais câbler... 🤯",
    ],
    subTexts: {
      "1": "Le bouton oui prend la confiance... 👀",
      "2": "Il flex de ouf là...",
      "3": "C'est un signe frérot... 😏",
      "4-6": "Le non est en PLS... coïncidence ? 🤭",
      "7+": "Mektoub, cherche pas 💫",
    },
    successEmoji: "💖",
    successTitle: "LETS GOOO !!! 🚀",
    successBody: "J'le savais, t'es mon date sûr ! 🥰",
    successBody2: "C'est carré dans l'axe 🤙💝",
    successEmojis: ["🌹", "💌", "🧸", "🍫", "💐"],
    footer: "Fait avec le ❤️ (et beaucoup de café)",
  },
  // ----- SET 2: South Park -----
{
  name: "south-park",
  headerEmoji: "🎿❄️",
  title: "Oh mon Dieu, tu veux être ma Valentine ?!",
  titleWithName: (n) => `${n}, oh mon Dieu, tu veux être ma Valentine ?!`,
  subtitle: "Sérieux les gars, j'ai quelque chose à demander...",
  yesButton: "Respect my authoritah! ✊",
  noMessages: [
    "Oh mon Dieu, ils ont tué Kenny! 😱",
    "Screw you guys, I'm going home 🚶",
    "C'est pas très gentil ça... 😐",
    "Tu m'as tuer! 💀",
    "Je suis sérieux toi! 😤",
    "C'est nul, vous êtes tous nuls! 😠",
    "Je vais péter un câble... 🤬",
    "Les gars... LES GARS! 😰",
    "C'est Tellement Pas Cool™ 🙄",
    "Derp derp derp... essaie encore 🥴",
  ],
  subTexts: {
    "1": "Le bouton Non commence à flipper... 👀",
    "2": "Mmm'kay, tu remarques un pattern là? 🤔",
    "3": "Kenny est mort pour rien si tu refuses...",
    "4-6": "C'est comme Cartman et les Cheesy Poofs, c'est destiny 🧀",
    "7+": "Par le pouvoir du Coon, accepte! 🦝",
  },
  successEmoji: "🎉",
  successTitle: "SWEET! 🙌",
  successBody: "C'est la meilleure journée EVER! 😍",
  successBody2: "On va manger chez City Wok pour fêter ça! 🥡💕",
  successEmojis: ["🎿", "🧸", "🍪", "❄️", "💝"],
  footer: "Créé à South Park, Colorado (420 friendly)",
},
// ----- SET 3: Ivoirien -----
{
  name: "ivoirien",
  headerEmoji: "🇨🇮✨",
  title: "Eh gâté, tu veux être ma Valentine ? 😊",
  titleWithName: (n) => `${n} gâtée, tu veux être ma Valentine ? 😊`,
  subtitle: "J'ai un truc important à te demander là...",
  yesButton: "C'est réglé même! 💚🧡",
  noMessages: [
    "Ton maudia...😅",
    "Hein?! Tu m'as raté là oh! 😅",
    "Môgô, arrête de jouer hein! 🤨",
    "Tu me cherches quoi vraiment? 😤",
    "On va où comme ça? 🙄",
    "Aïe aïe aïe... c'est chaud là! 😰",
    "Tu veux me tuer ou bien? 💀",
    "Gnama gnama... accepte seulement! 🙏",
    "Dêh, arrête de faire semblant! 😏",
    "On n'est pas fatigué même! 😤",
    "Bon, je suis à fond là hein! 🫠",
  ],
  subTexts: {
    "1": "Le bouton oui commence à danser coupé-décalé... 💃",
    "2": "C'est doux doux ça maintenant... 😌",
    "3": "Même Drogba va dire que c'est un but! ⚽",
    "4-6": "C'est Allah même qui a décidé ça! 🤲",
    "7+": "On s'est compris là, c'est on se calcule! ✨",
  },
  successEmoji: "🎊",
  successTitle: "YAKO YAKO! 🎉",
  successBody: "Tu m'as donné le go là, je suis trop content! 🥰",
  successBody2: "On va célébrer ça avec du bon garba! 🍛💕",
  successEmojis: ["🌺", "💚", "🧡", "⚽", "💝"],
  footer: "Made in Yopougon avec amour 🇨🇮❤️",
},
// ----- SET 4: Hautain / Suprêmement condescendant -----
{
  name: "condescendant-elite",
  headerEmoji: "👑🥂",
  title: "Dis-moi, tu comptes vraiment refuser… moi ?",
  titleWithName: (n) => `Alors ${n}, tu comptes sérieusement refuser… moi ?`,
  subtitle: "Je te donne une chance unique dans ta petite vie, saisis-la.",
  yesButton: "Évidemment que oui, je suis pas folle·fol ·💅",
  noMessages: [
    "Intéressant… tu choisis donc la médiocrité. Noté.",
    "Oh, du caractère ? C’est mignon… ça va pas durer.",
    "Tu te rends compte que tu viens de rater le coche de ta décennie ?",
    "Je vois. Tu préfères rester dans la moyenne. Courage.",
    "C’est presque touchant de te voir t’enfoncer comme ça.",
    "Non mais vraiment ? Toi ? Face à moi ? Amusant.",
    "Tu sais que les regrets ont un goût très amer, n’est-ce pas ?",
    "Encore ? Tu collectionnes les bad buzz relationnels ou… ?",
    "Je devrais te facturer le temps que tu me fais perdre là.",
    "Bon… on va dire que c’est ta faute, pas la mienne. Classique.",
    "À ce stade c’est du maso. J’respecte presque l’engagement.",
  ],
  subTexts: {
    "1": "Première erreur. Classique chez les gens… normaux.",
    "2": "Deux fois. Tu testes vraiment ma patience légendaire.",
    "3": "Trois refus. Tu commences à rentrer dans les statistiques des losers.",
    "4-6": "On dirait presque que tu collectionnes les L. Passionnant.",
    "7+": "À partir de maintenant c’est du masochisme certifié. Bravo.",
  },
  successEmoji: "✨👑",
  successTitle: "Enfin un minimum de bon goût.",
  successBody: "Tu viens de faire le seul choix intelligent de ta vie.",
  successBody2: "Bienvenue au niveau supérieur. Tâche de suivre.",
  successEmojis: ["👑", "🥂", "🖤", "💎", "😌"],
  footer: "Niveau minimum requis : avoir un minimum de goût",
},
// ----- SET 5: Anime Ojou-sama Arrogante / Tsundere Supérieure -----
{
  name: "anime-ojou-tsun",
  headerEmoji: "👑💢",
  title: "Ara ara… tu oses me demander d'être ta Valentine ?",
  titleWithName: (n) => `Ara ara, ${n}… tu crois vraiment mériter d'être mon Valentine ?`,
  subtitle: "Hmph. Je daigne t'accorder cette unique opportunité. Ne me fais pas perdre mon précieux temps.",
  yesButton: "Très bien… je t'autorise à être à mes côtés ♡",
  noMessages: [
    "… pathétique. Je m'attendais à mieux de ta part, commoner.",
    "Haa ? Tu refuses ?! Quelle impudence… tu vas le regretter toute ta vie.",
    "Ara, tu choisis la médiocrité ? Comme c'est… prévisible.",
    "Baka. Tu crois que quelqu'un comme toi peut se permettre de me dire non ?",
    "… tch. Encore un insecte qui ne sait pas reconnaître sa chance.",
    "Tu viens de rater l'événement le plus important de ton misérable existence. Bravo.",
    "Je devrais te faire nettoyer les sols de la résidence familiale pour cette insulte.",
    "Hmph. Ton niveau est vraiment trop bas pour que je m'énerve davantage.",
    "Continue comme ça et je vais vraiment commencer à t'ignorer… pour de bon.",
    "Ara ara… tu trembles déjà ? C'est presque mignon… dans le genre pitoyable.",
    "Dernière chance. Après ça, même mes servantes ne te regarderont plus.",
  ],
  subTexts: {
    "1": "Ara ? Déjà un refus ? Tu es plus courageux que je ne le pensais… ou plus stupide.",
    "2": "Deux fois. Tu commences vraiment à tester ma patience infinie, nekomata.",
    "3": "Trois refus… tu collectionnes les fautes capitales, on dirait.",
    "4-6": "À ce stade, c'est presque du masochisme. Fascinant… d'une manière répugnante.",
    "7+": "… tu es officiellement beneath my notice. Continue, je m'amuse presque.",
  },
  successEmoji: "💮✨",
  successTitle: "Hmph… tu as enfin fait le bon choix.",
  successBody: "Très bien. Je consens à t'accepter comme mon Valentine… pour cette fois seulement.",
  successBody2: "Ne t'avise surtout pas de me décevoir, commoner. Je te surveille ♡",
  successEmojis: ["👑", "🌹", "💢", "😌", "🖤"],
  footer: "Fait avec une grâce inégalée et un thé Darjeeling First Flush",
},
// ----- SET 6: Macron Présidentiel – Très Haut Perché -----
{
  name: "macron-jupiter",
  headerEmoji: "🇫🇷✨",
  title: "Et vous… vous voulez vraiment être ma Valentine ?",
  titleWithName: (n) => `Et vous ${n}… vous voulez vraiment être ma Valentine ?`,
  subtitle: "Je ne fais pas ça avec n’importe qui. Réfléchissez bien.",
  yesButton: "Oui… je l’accepte. C’est un très bon choix.",
  noMessages: [
    "Ah… intéressant. Vous préférez rester dans la rue, c’est ça ?",
    "Je traverse la rue, je vous trouve quelqu’un d’autre. Tranquille.",
    "Vous êtes réfractaire au changement… c’est noté.",
    "Ceux qui refusent, parfois… on se demande ce qu’ils sont.",
    "Moi je mets un pognon de dingue dans cette histoire et vous êtes quand même pas content·e ?",
    "Très bien. Vous voulez emmerder la situation ? On va continuer.",
    "C’est presque touchant de voir quelqu’un rater une opportunité pareille.",
    "Vous savez… y a des gens qui réussissent et puis… y a vous.",
    "Franchement ? À votre place j’aurais dit oui. Mais bon… chacun son niveau.",
    "Je ne suis pas arrogant. Je dis juste la réalité. Et la réalité c’est non.",
    "Allez-y, continuez. Moi j’assume totalement.",
    "Dernière chance. Après ça je vous mets dans la catégorie 'ceux qui ne sont rien'… définitivement.",
  ],
  subTexts: {
    "1": "Un refus. Déjà. C’est presque… gaulois comme attitude.",
    "2": "Deux fois. Vous commencez à me rappeler certains qui foutent le bordel au lieu de saisir leur chance.",
    "3": "Trois. On dirait presque que vous voulez me chercher.",
    "4-6": "À ce stade… c’est presque du talent. Du très mauvais talent.",
    "7+": "Vous avez gagné le prix de la persévérance dans la nullité. Bravo. Vraiment.",
  },
  successEmoji: "🇫🇷🔵",
  successTitle: "Très bien… choix responsable.",
  successBody: "Vous venez de faire un choix qui vous grandit. Je valide.",
  successBody2: "Maintenant essayez juste de ne pas me décevoir. Ce serait… regrettable.",
  successEmojis: ["🇫🇷", "✨", "🥂", "💼", "🖼️"],
  footer: "Fait avec hauteur de vue et un petit café à l’Élysée",
},
];

export function getSubText(textSet: TextSet, noCount: number): string {
  if (noCount === 1) return textSet.subTexts["1"];
  if (noCount === 2) return textSet.subTexts["2"];
  if (noCount === 3) return textSet.subTexts["3"];
  if (noCount >= 4 && noCount < 7) return textSet.subTexts["4-6"];
  return textSet.subTexts["7+"];
}
