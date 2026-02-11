import React from 'react';
import { QuestionMCQ, QuestionSpectrum, BadgeResult } from '../types';
import { Sun, CloudFog, Lock, Tornado } from 'lucide-react';

export const READINESS_QUIZ: QuestionMCQ[] = [
    {
        id: 1,
        question: "Pour toi, si un(e) partenaire veut te suivre partout, même avec tes amis, c'est...",
        options: [
            { id: 'A', text: "Une belle preuve d'amour et d'intérêt pour ma vie.", score: 3 }, // High tolerance for codependency
            { id: 'B', text: "Normal au début d'une relation passionnée.", score: 2 },
            { id: 'C', text: "Un peu excessif, j'aime garder un peu ma vie privée.", score: 1 },
            { id: 'D', text: "Un signe d'insécurité qui me ferait fuir rapidement.", score: 0 },
        ],
    },
    {
        id: 2,
        question: "Si ton/ta partenaire est fâché(e) parce que tu as passé une super soirée sans lui/elle dans le LOKA :",
        options: [
            { id: 'A', text: "Je m'excuse et je promets de l'inviter la prochaine fois.", score: 3 },
            { id: 'B', text: "Je me sens coupable d'avoir été heureux/se sans lui/elle.", score: 2 },
            { id: 'C', text: "Je lui explique que j'ai besoin d'espace, mais je reste calme.", score: 1 },
            { id: 'D', text: "Je trouve ce comportement infantile et inacceptable.", score: 0 },
        ],
    },
    {
        id: 3,
        question: "Quand vous n'êtes pas d'accord sur un choix (un film, un restaurant, etc.) :",
        options: [
            { id: 'A', text: "Je laisse l'autre choisir pour lui faire plaisir.", score: 3 },
            { id: 'B', text: "Je finis par accepter pour éviter une dispute.", score: 2 },
            { id: 'C', text: "On discute pour trouver une solution qui plaît aux deux.", score: 0 },
            { id: 'D', text: "C'est souvent moi qui décide à la fin.", score: 1 },
        ],
    },
    {
        id: 4,
        question: "Un(e) partenaire te suggère de changer de style car 'ça ne te met pas en valeur' :",
        options: [
            { id: 'A', text: "Je change tout de suite, il/elle veut sûrement mon bien.", score: 3 },
            { id: 'B', text: "Je me remets en question et je perds un peu confiance en moi.", score: 2 },
            { id: 'C', text: "Je l'écoute, mais je décide seul(e) de ce que je porte.", score: 1 },
            { id: 'D', text: "Je lui dis que c'est à moi de décider comment je m'habille.", score: 0 },
        ],
    },
    {
        id: 5,
        question: "Pour toi, la 'transparence totale' (codes de téléphone, localisation) est :",
        options: [
            { id: 'A', text: "Indispensable pour prouver qu'on n'a rien à cacher.", score: 3 },
            { id: 'B', text: "Une sécurité rassurante dans un couple moderne.", score: 2 },
            { id: 'C', text: "Inutile si la confiance est déjà présente.", score: 0 },
            { id: 'D', text: "Une intrusion grave dans la vie privée.", score: 0 },
        ],
    },
    {
        id: 6,
        question: "Si tu réussis quelque chose d'important et que ton/ta partenaire est jaloux/se :",
        options: [
            { id: 'A', text: "Je ne parle pas de ma réussite pour ne pas le/la blesser.", score: 3 },
            { id: 'B', text: "Je m'excuse d'en avoir trop fait.", score: 2 },
            { id: 'C', text: "J'essaie de comprendre pourquoi il/elle manque de confiance.", score: 1 },
            { id: 'D', text: "Je réalise qu'il/elle ne peut pas supporter mon bonheur.", score: 0 },
        ],
    },
    {
        id: 7,
        question: "Ton futur partenaire te demande de moins voir un(e) ami(e) qu'il/elle n'aime pas :",
        options: [
            { id: 'A', text: "J'arrête de voir cet(te) ami(e) pour éviter les tensions.", score: 3 },
            { id: 'B', text: "Je le/la vois en secret pour éviter les problèmes.", score: 2 },
            { id: 'C', text: "Je demande des explications concrètes avant de décider.", score: 1 },
            { id: 'D', text: "Mes amitiés sont importantes, personne ne choisit pour moi.", score: 0 },
        ],
    },
    {
        id: 8,
        question: "L'argent dans le couple doit servir, selon toi, à :",
        options: [
            { id: 'A', text: "Aider l'autre, même si je dois tout payer tout le temps.", score: 3 },
            { id: 'B', text: "Montrer mon pouvoir ou ma générosité.", score: 2 },
            { id: 'C', text: "Partager les dépenses selon ce que chacun gagne.", score: 0 },
            { id: 'D', text: "Rester totalement indépendant pour ne dépendre de personne.", score: 0 },
        ],
    },
    {
        id: 9,
        question: "Après une dispute, qui doit s'excuser selon toi ?",
        options: [
            { id: 'A', text: "C'est à moi de le faire à chaque fois pour calmer les choses.", score: 3 },
            { id: 'B', text: "Je m'excuse même si ce n'est pas ma faute.", score: 2 },
            { id: 'C', text: "On doit s'excuser tous les deux si on a fait une erreur.", score: 0 },
            { id: 'D', text: "S'excuser en premier est un signe de faiblesse.", score: 1 },
        ],
    },
    {
        id: 10,
        question: "Abandonner une passion pour passer plus de temps avec ton/ta partenaire :",
        options: [
            { id: 'A', text: "C'est normal, le couple est la seule priorité.", score: 3 },
            { id: 'B', text: "C'est un sacrifice romantique que je suis prêt(e) à faire.", score: 2 },
            { id: 'C', text: "Seulement si c'est temporaire.", score: 1 },
            { id: 'D', text: "C'est inacceptable, j'ai besoin de mon équilibre personnel.", score: 0 },
        ],
    },
];

export const PART2_QUESTIONS: QuestionSpectrum[] = [
    {
        id: 1,
        leftLabel: "Pour moi, le couple doit me laisser ma liberté.",
        rightLabel: "Pour moi, un couple doit tout faire ensemble, tout le temps."
    },
    {
        id: 2,
        leftLabel: "Je préfère une relation stable et tranquille.",
        rightLabel: "J'ai besoin de sensations fortes et de passion, même si on se dispute."
    },
    {
        id: 3,
        leftLabel: "Si on s'aime, on doit se faire une confiance totale.",
        rightLabel: "Si on s'aime, c'est normal de surveiller un peu l'autre."
    },
    {
        id: 4,
        leftLabel: "Ma vie privée est nécessaire pour mon équilibre.",
        rightLabel: "Entre partenaires, on doit tout se dire, sans exception."
    },
    {
        id: 5,
        leftLabel: "Une dispute est un problème à régler ensemble.",
        rightLabel: "Une dispute montre la force des sentiments."
    },
    {
        id: 6,
        leftLabel: "Je cherche quelqu'un qui m'encourage à voir mes amis.",
        rightLabel: "Je cherche quelqu'un qui veut passer tout son temps avec moi."
    },
    {
        id: 7,
        leftLabel: "Il est important de garder ses propres opinions.",
        rightLabel: "Je suis prêt(e) à changer mes idées pour plaire à l'autre."
    },
    {
        id: 8,
        leftLabel: "La jalousie est un signe d'insécurité.",
        rightLabel: "La jalousie est une preuve qu'on tient vraiment à moi."
    },
    {
        id: 9,
        leftLabel: "Chacun doit être responsable de son propre bonheur.",
        rightLabel: "Mon partenaire est le seul responsable de mon bonheur."
    },
    {
        id: 10,
        leftLabel: "On doit pouvoir se dire les choses honnêtement.",
        rightLabel: "Il vaut mieux cacher certaines choses pour éviter les conflits."
    },
];

export const BADGES: BadgeResult[] = [
    {
        id: 'eden',
        title: "L'Éden Lumineux",
        description: "Ta relation est un espace de liberté. Tu respires, tu grandis et tu es respecté(e). C'est le modèle d'une relation saine.",
        color: "from-teal-400 to-emerald-600",
        iconName: 'Sun',
        minScore: 0,
        maxScore: 15,
        level: 'Sain'
    },
    {
        id: 'labyrinthe',
        title: "Le Labyrinthe Rose",
        description: "C'est très romantique, mais attention à ne pas te perdre. La fusion est belle, mais ne laisse pas ton identité disparaître.",
        color: "from-pink-400 to-rose-500",
        iconName: 'CloudFog',
        minScore: 16,
        maxScore: 30,
        level: 'Modéré'
    },
    {
        id: 'cage',
        title: "La Cage Dorée",
        description: "Attention ! La toxicité est présente, masquée par des preuves d'affection. Le contrôle n'est pas de l'amour, c'est une prison.",
        color: "from-orange-400 to-red-600",
        iconName: 'Lock',
        minScore: 31,
        maxScore: 45,
        level: 'Toxique'
    },
    {
        id: 'vortex',
        title: "Le Vortex Noir",
        description: "Danger. Tu es dans une situation de manipulation et de surveillance. Ta santé mentale est en jeu, il est temps de réagir.",
        color: "from-gray-700 to-black",
        iconName: 'Tornado',
        minScore: 46,
        maxScore: 100, // High cap to catch everything
        level: 'Dangereux'
    }
];

export const getIcon = (name: string, className?: string) => {
    const props = { className: className || "w-6 h-6" };
    switch (name) {
        case 'Sun': return <Sun {...props} />;
        case 'CloudFog': return <CloudFog {...props} />;
        case 'Lock': return <Lock {...props} />;
        case 'Tornado': return <Tornado {...props} />;
        default: return <Sun {...props} />;
    }
}
