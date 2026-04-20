import React, { useState, Fragment } from 'react';
import '../App.css';

// --- IMPORT ẢNH NỀN CHÍNH & LOGO PHE LỚN ---
import armiesBgImg from '../assets/Armies Page.jpeg'; 
import spaceMarineIcon from '../assets/Spacemarines/Space_Marine_Logo.png';
import imperiumIcon from '../assets/Imperium/Armies of Imperium.png';
import chaosIcon from '../assets/Chaos/Chaos.png';
import xenosIcon from '../assets/Xenos/Xenos.png'; 

// === IMPORT ẢNH CHO PHẦN WHAT'S NEXT ===
import whatsNext1Bg from '../assets/What_next_1.jpg'; 
import starterSetProduct from '../assets/Starter_Set_PNG.png'; 
import whatsNext2Bg from '../assets/What_next_2.jpg'; 

// === IMPORT ẢNH CHO PHẦN NEED MORE INFORMATION ===
// Nhớ kiểm tra lại tên file chính xác trong thư mục assets của bạn nhé
import adeptusMechaIcon from '../assets/adeptus mecha 1.png'; 
import coreRulesProduct from '../assets/Free_Core_Rules.png'; 

// === IMPORT SPACE MARINES ===
import smUltraBg from '../assets/Spacemarines/Ultramarines/Space_Marine_Ultra.jpg'; 
import modelTerminator from '../assets/Spacemarines/Ultramarines/Terminator.png';
import modelDreadnought from '../assets/Spacemarines/Ultramarines/Dreadnought.png';
import modelGuilliman from '../assets/Spacemarines/Ultramarines/roboute_guilliman.png';
import modelSM1 from '../assets/Spacemarines/Ultramarines/Spacemarine1.png';
import modelSM2 from '../assets/Spacemarines/Ultramarines/Spacemarine2.png';
import modelSM3 from '../assets/Spacemarines/Ultramarines/Spacemarine3.png';

import btLogo from '../assets/Spacemarines/Black_templars/Black_Templar_logo.png';
import btBg from '../assets/Spacemarines/Black_templars/Black_Templar_BT.jpg';
import btModel1 from '../assets/Spacemarines/Black_templars/Badhair_Templar.png'; 
import btModel2 from '../assets/Spacemarines/Black_templars/Black_Templar_Priest.png';
import btModel3 from '../assets/Spacemarines/Black_templars/Black_Templar1.png';
import btModel4 from '../assets/Spacemarines/Black_templars/Black_Templar2.png';
import btModel5 from '../assets/Spacemarines/Black_templars/Black_Templar3.png';

import baLogo from '../assets/Spacemarines/Blood_angels/Blood_angels.png';
import baBg from '../assets/Spacemarines/Blood_angels/Blood_Angels_BA.jpg';
import baModel1 from '../assets/Spacemarines/Blood_angels/Blood_Angels1.png';
import baModel2 from '../assets/Spacemarines/Blood_angels/Blood_Angels2.png';
import baModel3 from '../assets/Spacemarines/Blood_angels/Blood_Angels3.png';
import baModel4 from '../assets/Spacemarines/Blood_angels/Lucien_Blood_Angels.png'; 
import baModel5 from '../assets/Spacemarines/Blood_angels/Black_Angels.png';
import baModel6 from '../assets/Spacemarines/Blood_angels/Mephiston.png';

import daLogo from '../assets/Spacemarines/Dark_angels/Dark_angels.png';
import daBg from '../assets/Spacemarines/Dark_angels/Dark_Angels_DA.jpg';
import daModel1 from '../assets/Spacemarines/Dark_angels/Lion_El_Jonson.png'; 
import daModel2 from '../assets/Spacemarines/Dark_angels/Dark_Angels_Priest.png';
import daModel3 from '../assets/Spacemarines/Dark_angels/Dark_Angels1.png';
import daModel4 from '../assets/Spacemarines/Dark_angels/Dark_Angels2.png';
import daModel5 from '../assets/Spacemarines/Dark_angels/DreadnoughtDA.png';

import dwLogo from '../assets/Spacemarines/Deathwatch/Deathwatch_logo.png';
import dwBg from '../assets/Spacemarines/Deathwatch/Deathwatch_Blackshield.jpg';
import dwModel1 from '../assets/Spacemarines/Deathwatch/Badhair_Deathwatch.png';
import dwModel2 from '../assets/Spacemarines/Deathwatch/Chaplain.png';
import dwModel3 from '../assets/Spacemarines/Deathwatch/Deathwatch_Priest.png';
import dwModel4 from '../assets/Spacemarines/Deathwatch/Deathwatch1.png';
import dwModel5 from '../assets/Spacemarines/Deathwatch/Deathwatch2.png';

import gkLogo from '../assets/Spacemarines/Grey_knights/Grey+Knights.png';
import gkBg from '../assets/Spacemarines/Grey_knights/Grey_Knights_GK.jpg';
import gkModel1 from '../assets/Spacemarines/Grey_knights/Dreadnought_GK.png';
import gkModel2 from '../assets/Spacemarines/Grey_knights/Aldrik_Voldus.png';
import gkModel3 from '../assets/Spacemarines/Grey_knights/Grey_Knights1.png';
import gkModel4 from '../assets/Spacemarines/Grey_knights/Grey_Knights2.png';
import gkModel5 from '../assets/Spacemarines/Grey_knights/Castellan_Garran_Crowe.png';
import gkModel6 from '../assets/Spacemarines/Grey_knights/Kaldor_Draigo.png';

import swLogo from '../assets/Spacemarines/Space_wolves/Space_wolves.png';
import swBg from '../assets/Spacemarines/Space_wolves/Space_Wolves_SW.jpg';
import swModel1 from '../assets/Spacemarines/Space_wolves/Dreadnought_SW.png';
import swModel2 from '../assets/Spacemarines/Space_wolves/Space_Wolves1.png';
import swModel3 from '../assets/Spacemarines/Space_wolves/Space_Wolves2.png';
import swModel4 from '../assets/Spacemarines/Space_wolves/Space_Wolves3.png';
import swModel5 from '../assets/Spacemarines/Space_wolves/Space_Wolves4.png';

// === IMPORT ARMIES OF THE IMPERIUM ===
import sobLogo from '../assets/Imperium/Adepta_Sororitas/Adepta_Logo.png';
import sobBg from '../assets/Imperium/Adepta_Sororitas/Adepta_Sororitas_SOB.jpg';
import sobModel1 from '../assets/Imperium/Adepta_Sororitas/First_Sister.png';
import sobModel2 from '../assets/Imperium/Adepta_Sororitas/Nun_Adepta.png';
import sobModel3 from '../assets/Imperium/Adepta_Sororitas/Penitent_engines.png';
import sobModel4 from '../assets/Imperium/Adepta_Sororitas/Priestess_nun.png';
import sobModel5 from '../assets/Imperium/Adepta_Sororitas/Second_Sister.png';

import acLogo from '../assets/Imperium/Adeptus_Custodes/Custodes_logo.png';
import acBg from '../assets/Imperium/Adeptus_Custodes/Adeptus_Custodes_AC.jpeg';
import acModel1 from '../assets/Imperium/Adeptus_Custodes/Dreadnought_Custodes.png';
import acModel2 from '../assets/Imperium/Adeptus_Custodes/Custodes1.png';
import acModel3 from '../assets/Imperium/Adeptus_Custodes/Custodes2.png';
import acModel4 from '../assets/Imperium/Adeptus_Custodes/Constantin_Valdor.png';
import acModel5 from '../assets/Imperium/Adeptus_Custodes/Sister_of_Silence.png';

import amLogo from '../assets/Imperium/Adeptus_Mechanicus/Mechanicus_logo.png';
import amBg from '../assets/Imperium/Adeptus_Mechanicus/Adeptus_Mechanicus_AM.jpg';
import amModel1 from '../assets/Imperium/Adeptus_Mechanicus/Machine_Mechanicus.png';
import amModel2 from '../assets/Imperium/Adeptus_Mechanicus/Mecha_priest_1.png';
import amModel3 from '../assets/Imperium/Adeptus_Mechanicus/Mecha_priest_2.png';
import amModel4 from '../assets/Imperium/Adeptus_Mechanicus/Mecha_priest_3.png';
import amModel5 from '../assets/Imperium/Adeptus_Mechanicus/Mecha_priest_4.png';

import astLogo from '../assets/Imperium/Astra_Militarum/Astra_Militarum_logo.png';
import astBg from '../assets/Imperium/Astra_Militarum/Astra_Militarum_AM.jpg';
import astModel1 from '../assets/Imperium/Astra_Militarum/Commisar.png';
import astModel2 from '../assets/Imperium/Astra_Militarum/Milita_mecha.png';
import astModel3 from '../assets/Imperium/Astra_Militarum/Trooper1.png';
import astModel4 from '../assets/Imperium/Astra_Militarum/Trooper2.png';
import astModel5 from '../assets/Imperium/Astra_Militarum/Trooper3.png';

// === IMPORT FORCES OF CHAOS ===
import csmBg from '../assets/Chaos/Chaos_Space_Marines/Chaos_Space_Marines_CSM.jpg';
import csmModel1 from '../assets/Chaos/Chaos_Space_Marines/Chaos_Dreadnought.png';
import csmModel2 from '../assets/Chaos/Chaos_Space_Marines/Chaos_Marine1.png';
import csmModel3 from '../assets/Chaos/Chaos_Space_Marines/Chaos_Marine2.png';
import csmModel4 from '../assets/Chaos/Chaos_Space_Marines/Chaos_Priest.png';
import csmModel5 from '../assets/Chaos/Chaos_Space_Marines/Chaos_Sisters.png';

import dgLogo from '../assets/Chaos/Death_Guards/Death_Guard_logo.png';
import dgBg from '../assets/Chaos/Death_Guards/Death_Guard_DG.jpg';
import dgModel1 from '../assets/Chaos/Death_Guards/Death_marine1.png';
import dgModel2 from '../assets/Chaos/Death_Guards/Death_marine2.png';
import dgModel3 from '../assets/Chaos/Death_Guards/Death_marine3.png';
import dgModel4 from '../assets/Chaos/Death_Guards/rots_monster.png';
import dgModel5 from '../assets/Chaos/Death_Guards/Death_Commisar.png';

import tsLogo from '../assets/Chaos/Thousand_Sons/Thousand_Sons_logo.png';
import tsBg from '../assets/Chaos/Thousand_Sons/Thousand_Sons_TS.jpg';
import tsModel1 from '../assets/Chaos/Thousand_Sons/Creep_TS.png';
import tsModel2 from '../assets/Chaos/Thousand_Sons/TS_Marine1.png';
import tsModel3 from '../assets/Chaos/Thousand_Sons/TS_Marine2.png';
import tsModel4 from '../assets/Chaos/Thousand_Sons/TS_Marine3.png';
import tsModel5 from '../assets/Chaos/Thousand_Sons/TS_Dreadnought.png';

import weLogo from '../assets/Chaos/World_Eaters/World_Eaters_logo.png';
import weBg from '../assets/Chaos/World_Eaters/World_Eater_WE.jpg';
import weModel1 from '../assets/Chaos/World_Eaters/Angron.png';
import weModel2 from '../assets/Chaos/World_Eaters/Brute_Eater.png';
import weModel3 from '../assets/Chaos/World_Eaters/WE_Marine1.png';
import weModel4 from '../assets/Chaos/World_Eaters/WE_Marine2.png';
import weModel5 from '../assets/Chaos/World_Eaters/WE_Marine3.png';

import cdLogo from '../assets/Chaos/Chaos_Daemons/Chaos_Daemons_logo.png';
import cdBg from '../assets/Chaos/Chaos_Daemons/Chao_Daemons_CD.jpg';
import cdModel1 from '../assets/Chaos/Chaos_Daemons/Daemon_prince.png';
import cdModel2 from '../assets/Chaos/Chaos_Daemons/Khrone_Daemon.png';
import cdModel3 from '../assets/Chaos/Chaos_Daemons/Nurgle_Daemon.png';
import cdModel4 from '../assets/Chaos/Chaos_Daemons/Slanesh_Daemon.png';
import cdModel5 from '../assets/Chaos/Chaos_Daemons/Tzeench_Daemon.png';

// === IMPORT THE XENOS THREAT ===
// --- Aeldari ---
import elLogo from '../assets/Xenos/Aeldari/Eldar_logo.png';
import elBg from '../assets/Xenos/Aeldari/Aeldari_ED.jpg';
import elModel1 from '../assets/Xenos/Aeldari/Eldar1.png';
import elModel2 from '../assets/Xenos/Aeldari/Eldar2.png';
import elModel3 from '../assets/Xenos/Aeldari/Eldar3.png';
import elModel4 from '../assets/Xenos/Aeldari/Eldar4.png';
import elModel5 from '../assets/Xenos/Aeldari/Harlequinn.png';

// --- Drukhari ---
import deLogo from '../assets/Xenos/Drukhari/Dark_Eldar_logo.png';
import deBg from '../assets/Xenos/Drukhari/Drukhari_DE.jpg';
import deModel1 from '../assets/Xenos/Drukhari/Dark_Eldar1.png';
import deModel2 from '../assets/Xenos/Drukhari/Dark_Eldar2.png';
import deModel3 from '../assets/Xenos/Drukhari/Dark_Eldar3.png';
import deModel4 from '../assets/Xenos/Drukhari/Female_Dark_Eldar.png';
import deModel5 from '../assets/Xenos/Drukhari/Brute_Drukhari.png';

// --- Tyranids ---
import nidsLogo from '../assets/Xenos/Tyranids/Tyranids_logo.png';
import nidsBg from '../assets/Xenos/Tyranids/Tyranids_Hive.jpg';
import nidsModel1 from '../assets/Xenos/Tyranids/nids1.png';
import nidsModel2 from '../assets/Xenos/Tyranids/nids2.png';
import nidsModel3 from '../assets/Xenos/Tyranids/nids3.png';
import nidsModel4 from '../assets/Xenos/Tyranids/nids4.png';
import nidsModel5 from '../assets/Xenos/Tyranids/nids5.png';

// --- Genestealer Cults ---
import gscLogo from '../assets/Xenos/Genestealer_Cults/Genestealer_logo.png';
import gscBg from '../assets/Xenos/Genestealer_Cults/Gene_cults.jpg';
import gscModel1 from '../assets/Xenos/Genestealer_Cults/Stealer1.png';
import gscModel2 from '../assets/Xenos/Genestealer_Cults/Stealer2.png';
import gscModel3 from '../assets/Xenos/Genestealer_Cults/Stealer3.png';
import gscModel4 from '../assets/Xenos/Genestealer_Cults/Stealer4.png';
import gscModel5 from '../assets/Xenos/Genestealer_Cults/Stealer5.png';

// --- Leagues of Votann ---
import lovLogo from '../assets/Xenos/Leagues_of_Votann/Votann_logo.png';
import lovBg from '../assets/Xenos/Leagues_of_Votann/LoV.jpg';
import lovModel1 from '../assets/Xenos/Leagues_of_Votann/Votann1.png';
import lovModel2 from '../assets/Xenos/Leagues_of_Votann/Votann2.png';
import lovModel3 from '../assets/Xenos/Leagues_of_Votann/Votann3.png';
import lovModel4 from '../assets/Xenos/Leagues_of_Votann/Votann4.png';
import lovModel5 from '../assets/Xenos/Leagues_of_Votann/Mech_Votann.png';

// --- Necrons ---
import necLogo from '../assets/Xenos/Necrons/Necrons_logo.png';
import necBg from '../assets/Xenos/Necrons/Necron_Ne.jpg';
import necModel1 from '../assets/Xenos/Necrons/Necron1.png';
import necModel2 from '../assets/Xenos/Necrons/Necron2.png';
import necModel3 from '../assets/Xenos/Necrons/Necron3.png';
import necModel4 from '../assets/Xenos/Necrons/Necron4.png';
import necModel5 from '../assets/Xenos/Necrons/Necron5.png';

// --- Orks ---
import orkLogo from '../assets/Xenos/Orks/Orks_logo.png';
import orkBg from '../assets/Xenos/Orks/Wagh.jpg';
import orkModel1 from '../assets/Xenos/Orks/Ork1.png';
import orkModel2 from '../assets/Xenos/Orks/Ork2.png';
import orkModel3 from '../assets/Xenos/Orks/Ork3.png';
import orkModel4 from '../assets/Xenos/Orks/Ork4.png';
import orkModel5 from '../assets/Xenos/Orks/Ork5.png';

// --- T'au Empire ---
import tauLogo from "../assets/Xenos/T'au_Empire/Tau_logo.png";
import tauBg from "../assets/Xenos/T'au_Empire/Greater_good.jpg";
import tauModel1 from "../assets/Xenos/T'au_Empire/Tau_mech1.png";
import tauModel2 from "../assets/Xenos/T'au_Empire/Tau_mech2.png";
import tauModel3 from "../assets/Xenos/T'au_Empire/Tau_mech3.png";
import tauModel4 from "../assets/Xenos/T'au_Empire/Tau_soldier1.png";
import tauModel5 from "../assets/Xenos/T'au_Empire/Tau_soldier2.png";

// ==========================================
// DỮ LIỆU CÁC PHE
// ==========================================
const spaceMarineChapters = [
  { 
    id: 'sm-base', 
    name: 'Space Marines', 
    logo: spaceMarineIcon, 
    navIcon: spaceMarineIcon, 
    bgImg: smUltraBg, 
    models: [modelTerminator, modelDreadnought, modelGuilliman, modelSM1, modelSM2, modelSM3], 
    desc: (
      <>
        There is no combat theatre in which the Space Marines cannot excel, no foe they cannot overcome, and no danger they fear to face. They are the elite shock troops of the Imperium, whose lightning-fast campaigns are conducted with such spectacular brutality that they have come to be known as the Angels of Death.
        <br/><br/>
        <strong>FACTION KEYWORD:</strong> ADEPTUS ASTARTES
      </>
    ) 
  },
  { 
    id: 'black-templars', 
    name: 'Black Templars', 
    logo: btLogo, 
    navIcon: btLogo, 
    bgImg: btBg, 
    models: [btModel1, btModel2, btModel3, btModel4, btModel5], 
    desc: (
      <>
        Every battle-brother of the Black Templars believes in the Emperor’s divinity, and is sworn to oaths of purgation and vengeance. Concepts such as mercy and forgiveness are anathema to them, and they see it as their personal mission to quash without hesitation all heretics, mutants, witches, aliens, and unbelievers.
        <br/><br/>
        <strong>FACTION KEYWORD:</strong> ADEPTUS ASTARTES
      </>
    ) 
  },
  { 
    id: 'blood-angels', 
    name: 'Blood Angels', 
    logo: baLogo, 
    navIcon: baLogo, 
    bgImg: baBg, 
    models: [baModel1, baModel2, baModel3, baModel4, baModel5, baModel6], 
    desc: (
      <>
        The Blood Angels are amongst the most noble and honourable of Space Marines, with a history of steadfast loyalty to the Imperium that stretches back to the Great Crusade. They strive without falter to protect the innocent, but their heroic reputation conceals a hideous curse. Each battle-brother fights day and night to resist this affliction, and keep it hidden from outsiders.
        <br/><br/>
        <strong>FACTION KEYWORD:</strong> ADEPTUS ASTARTES
      </>
    ) 
  },
  { 
    id: 'dark-angels', 
    name: 'Dark Angels', 
    logo: daLogo, 
    navIcon: daLogo, 
    bgImg: daBg, 
    models: [daModel1, daModel2, daModel3, daModel4, daModel5], 
    desc: (
      <>
        Staunch defenders of the Imperium, the dour and brooding brotherhood of the Dark Angels is merciless in attack and stubborn in defence. They are also shrouded in mystery and myth, hoarding secrets so shameful that they are kept even from many in their own ranks.
        <br/><br/>
        <strong>FACTION KEYWORD:</strong> ADEPTUS ASTARTES
      </>
    ) 
  },
  { 
    id: 'deathwatch', 
    name: 'Deathwatch', 
    logo: dwLogo, 
    navIcon: dwLogo, 
    bgImg: dwBg, 
    models: [dwModel1, dwModel2, dwModel3, dwModel4, dwModel5], 
    desc: (
      <>
        The Deathwatch is a specialist gathering of Space Marines, veteran warriors drawn from every other Chapter and united in a single purpose. It is their task to hunt the alien wherever it might appear, employing forbidden technology and unorthodox tactics to safeguard the Emperor's realm against the xenos tide.
        <br/><br/>
        <strong>FACTION KEYWORD:</strong> ADEPTUS ASTARTES
      </>
    ) 
  },
  { 
    id: 'grey-knights', 
    name: 'Grey Knights', 
    logo: gkLogo, 
    navIcon: gkLogo, 
    bgImg: gkBg, 
    models: [gkModel1, gkModel2, gkModel3, gkModel4, gkModel5, gkModel6], 
    desc: (
      <>
        Wherever daemons break through the veil of reality, wherever the powers of the warp manifest in the form of malefic entities or abhorrent possessions, the Grey Knights strike. Silver-clad psychic Space Marines from the moon of Titan, these selfless secret warriors risk all to hold back the threat of Humanity’s eternal damnation.
        <br/><br/>
        <strong>FACTION KEYWORD:</strong> SANCTIC ASTARTES
      </>
    ) 
  },
  { 
    id: 'space-wolves', 
    name: 'Space Wolves', 
    logo: swLogo, 
    navIcon: swLogo, 
    bgImg: swBg, 
    models: [swModel1, swModel2, swModel3, swModel4, swModel5], 
    desc: (
      <>
       Ferocious warriors from the death world of Fenris, the Space Wolves are dauntless, tenacious, and possess an insatiable hunger for battle. With a temper like the wrath of a winter storm, they hunt all those who defy the Imperium with swift fury akin to a crackling fire-bolt.
        <br/><br/>
        <strong>FACTION KEYWORD:</strong> ADEPTUS ASTARTES
      </>
    ) 
  },
];

const imperiumArmies = [
  { 
    id: 'sororitas', 
    name: 'Adepta Sororitas', 
    logo: sobLogo, 
    navIcon: sobLogo, 
    bgImg: sobBg, 
    models: [sobModel1, sobModel2, sobModel3, sobModel4, sobModel5], 
    desc: (
      <>
        The Adepta Sororitas are warriors of unyielding faith. They purge their enemies from the field with roaring fire and howling chainblade, displaying their zealous devotion to the God-Emperor and the Imperial Cult. The Battle Sisters excel in short-ranged firefights, mowing down the foe with furious volleys while their soaring hymnals echo over the screams of the dying.
        <br/><br/>
        <strong>FACTION KEYWORD:</strong> ADEPTA SORORITAS
      </>
    ) 
  },
  { 
    id: 'custodes', 
    name: 'Adeptus Custodes', 
    logo: acLogo, 
    navIcon: acLogo, 
    bgImg: acBg, 
    models: [acModel1, acModel2, acModel3, acModel4, acModel5], 
    desc: (
      <>
        The Adeptus Custodes were the first and greatest of the super-soldiers engineered by the Emperor. Each is a warrior of superlative might and superhuman resilience, a strategist and tactician to rival the greatest generals, and so much more besides. They are nigh-immortal exemplars of legend, who stop at nothing to defend the Emperor and his Throneworld.
        <br/><br/>
        <strong>FACTION KEYWORD:</strong> ADEPTUS CUSTODES
      </>
    ) 
  },
  { 
    id: 'mechanicus', 
    name: 'Adeptus Mechanicus', 
    logo: amLogo, 
    navIcon: amLogo, 
    bgImg: amBg, 
    models: [amModel1, amModel2, amModel3, amModel4, amModel5], 
    desc: (
      <>
        The Adeptus Mechanicus prize knowledge above all things, and will shed oceans of blood and oil in their endless crusade to acquire lost lore and ancient relics. The Machine Cult's cyborg armies wield strange and arcane technological weapons of phenomenal power, manufactured and administered by the bizarre Tech-Priests of the Omnissiah.
        <br/><br/>
        <strong>FACTION KEYWORD:</strong> ADEPTUS MECHANICUS
      </>
    ) 
  },
  { 
    id: 'militarum', 
    name: 'Astra Militarum', 
    logo: astLogo, 
    navIcon: astLogo, 
    bgImg: astBg, 
    models: [astModel1, astModel2, astModel3, astModel4, astModel5], 
    desc: (
      <>
        The Astra Militarum are a blunt instrument of violence, wrought on a galactic scale. Massed infantry and rumbling tanks serve as both a living shield for the Emperor’s realm, and an unstoppable sledgehammer with which to crush its foes. These loyal armies have served the Imperium for ten thousand years, sacrificing countless lives before surrendering even a single world.
        <br/><br/>
        <strong>FACTION KEYWORD:</strong> ASTRA MILITARUM
      </>
    ) 
  }
];

const chaosArmies = [
  { 
    id: 'chaos-sm', 
    name: 'Chaos Space Marines', 
    logo: chaosIcon, 
    navIcon: chaosIcon, 
    bgImg: csmBg, 
    models: [csmModel1, csmModel2, csmModel3, csmModel4, csmModel5], 
    desc: (
      <>
        They are the Imperium’s fallen heroes, superhuman warriors who sold their souls for the promise of power gifted from the Dark Gods. They are the Heretic Astartes – the Chaos Space Marines. From the Eye of Terror, the Maelstrom, the Great Rift, and a thousand other strongholds they strike at the realm they once swore to defend, driven by bitter hatred and unnatural bloodlust.
        <br/><br/>
        <strong>FACTION KEYWORD:</strong> HERETIC ASTARTES
      </>
    ) 
  },
  { 
    id: 'death-guard', 
    name: 'Death Guard', 
    logo: dgLogo, 
    navIcon: dgLogo, 
    bgImg: dgBg, 
    models: [dgModel1, dgModel2, dgModel3, dgModel4, dgModel5], 
    desc: (
      <>
        The Death Guard are the Traitor Legion most favoured by Nurgle, the Chaos God of disease and despair. Devoted to spreading the Plaguefather's hideous infections across the worlds of the Imperium, these morbid Space Marines are living plague vectors gifted with grotesque resilience.
        <br/><br/>
        <strong>FACTION KEYWORD:</strong> DEATH GUARD
      </>
    ) 
  },
  { 
    id: 'thousand-sons', 
    name: 'Thousand Sons', 
    logo: tsLogo, 
    navIcon: tsLogo, 
    bgImg: tsBg, 
    models: [tsModel1, tsModel2, tsModel3, tsModel4, tsModel5], 
    desc: (
      <>
        The Thousand Sons are a Traitor Legion of mad Sorcerers sworn to the service of Tzeentch, the Chaos God of magic and change. These eldritch Space Marines rule over retinues of twisted mutants and arcane automata, launching labyrinthine plots to bring about the Imperium's destruction.
        <br/><br/>
        <strong>FACTION KEYWORD:</strong> THOUSAND SONS
      </>
    ) 
  },
  { 
    id: 'world-eaters', 
    name: 'World Eaters', 
    logo: weLogo, 
    navIcon: weLogo, 
    bgImg: weBg, 
    models: [weModel1, weModel2, weModel3, weModel4, weModel5], 
    desc: (
      <>
        The World Eaters lay into their enemies with gore-encrusted chainblades, screaming praise to Khorne, the Chaos God of blood and hate. This Traitor Legion of berserk Space Marines cares for nothing but slaughter, claiming skulls from the Imperium's mightiest champions.
        <br/><br/>
        <strong>FACTION KEYWORD:</strong> WORLD EATERS
      </>
    ) 
  },
  { 
    id: 'daemons', 
    name: 'Chaos Daemons', 
    logo: cdLogo, 
    navIcon: cdLogo, 
    bgImg: cdBg, 
    models: [cdModel1, cdModel2, cdModel3, cdModel4, cdModel5], 
    desc: (
      <>
        No foe of the Imperium is more malignant, nor more terrible, than the daemons of Chaos, the numberless foot soldiers of the Ruinous Powers. Spawned in the depths of the warp, these otherworldly legions take forms drawn from the darkest nightmares and cruellest desires of mortal minds, and will stop at nothing to see reality itself torn apart.
        <br/><br/>
        <strong>FACTION KEYWORD:</strong> LEGIONES DAEMONICA
      </>
    ) 
  }
];

const xenosArmies = [
  { 
    id: 'aeldari', 
    name: 'Aeldari', 
    logo: elLogo, 
    navIcon: elLogo, 
    bgImg: elBg, 
    models: [elModel1, elModel2, elModel3, elModel4, elModel5], 
    desc: (
      <>
        Once rulers of a galactic empire, the Aeldari are now a splintered people with only fragments of their former power. Those called Asuryani have plied the stars for millenia in huge spacefaring vessels known as craftworlds – proud nomads who fight for survival with psychic wisdom, wondrous technology, and breathtaking skill.
        <br/><br/>
        <strong>FACTION KEYWORD:</strong> AELDARI
      </>
    ) 
  },
  { 
    id: 'drukhari', 
    name: 'Drukhari', 
    logo: deLogo, 
    navIcon: deLogo, 
    bgImg: deBg, 
    models: [deModel1, deModel2, deModel3, deModel4, deModel5], 
    desc: (
      <>
        The Drukhari are a sadistic reaver-civilisation of murderous Aeldari who feed off the anguish and suffering of their victims. Ever-hungry for slaves, spoils, and entertainment, they launch lightning raids on unsuspecting enemies before vanishing back to their lairs in Commorragh, the twisted nether-city that lurks below reality in the webway's darkest corners.
        <br/><br/>
        <strong>FACTION KEYWORD:</strong> DRUKHARI
      </>
    ) 
  },
  { 
    id: 'tyranids', 
    name: 'Tyranids', 
    logo: nidsLogo, 
    navIcon: nidsLogo, 
    bgImg: nidsBg, 
    models: [nidsModel1, nidsModel2, nidsModel3, nidsModel4, nidsModel5], 
    desc: (
      <>
        The Tyranids have invaded the galaxy from beyond the intergalactic void, their hive fleets slithering like tendrils into every sector and system. Driven by the imperatives of the almighty Hive Mind, their swarms sweep over world after world in a living tide of biological killing-machines, devouring every last shred of biomass in their path.
        <br/><br/>
        <strong>FACTION KEYWORD:</strong> TYRANIDS
      </>
    ) 
  },
  { 
    id: 'gsc', 
    name: 'Genestealer Cults', 
    logo: gscLogo, 
    navIcon: gscLogo, 
    bgImg: gscBg, 
    models: [gscModel1, gscModel2, gscModel3, gscModel4, gscModel5], 
    desc: (
      <>
        The Genestealer Cults gather far from the prying eyes of the Imperium’s harsh authorities, secret worshippers mutated by Tyranid infection. These fanatics undermine entire worlds to pave the way for their mysterious alien deities. Armed with sabotage, cunning, and the zealotry of true believers, they are an unseen scourge that gnaws at the very heart of the Imperium.
        <br/><br/>
        <strong>FACTION KEYWORD:</strong> GENESTEALER CULTS
      </>
    ) 
  },
  { 
    id: 'votann', 
    name: 'Leagues of Votann', 
    logo: lovLogo, 
    navIcon: lovLogo, 
    bgImg: lovBg, 
    models: [lovModel1, lovModel2, lovModel3, lovModel4, lovModel5], 
    desc: (
      <>
        The Leagues of Votann are expert miners, pragmatic traders, and resilient warriors, wielding advanced technologies lost to the Imperium. The clone-grown Kin who populate the Leagues are tough in body and mind, their armies striking out from the galactic core to claim resources and settle debts by any means necessary.
        <br/><br/>
        <strong>FACTION KEYWORD:</strong> LEAGUES OF VOTANN
      </>
    ) 
  },
  { 
    id: 'necrons', 
    name: 'Necrons', 
    logo: necLogo, 
    navIcon: necLogo, 
    bgImg: necBg, 
    models: [necModel1, necModel2, necModel3, necModel4, necModel5], 
    desc: (
      <>
        After aeons of hibernation, the deathless android legions of the Necrons rise across the galaxy. Armies of living metal march from crumbling stasis-tombs, armed with arcane technology and nigh-impervious to damage. Ruled by maniacal Overlords intent on restoring their ancient empire, the Necrons will remind the galaxy of their cold and terrifying wrath.
        <br/><br/>
        <strong>FACTION KEYWORD:</strong> NECRONS
      </>
    ) 
  },
  { 
    id: 'orks', 
    name: 'Orks', 
    logo: orkLogo, 
    navIcon: orkLogo, 
    bgImg: orkBg, 
    models: [orkModel1, orkModel2, orkModel3, orkModel4, orkModel5], 
    desc: (
      <>
        Tough, brutal, and impossibly numerous, the Orks are one of the most dangerous species in the galaxy. Their marauding warbands and colossal hordes have threatened Humanity since before the dawn of the Imperium, for Orks thrive on battle and mayhem, roaming the stars in search of a good fight.
        <br/><br/>
        <strong>FACTION KEYWORD:</strong> ORKS
      </>
    ) 
  },
  { 
    id: 'tau', 
    name: "T'au Empire", 
    logo: tauLogo, 
    navIcon: tauLogo, 
    bgImg: tauBg, 
    models: [tauModel1, tauModel2, tauModel3, tauModel4, tauModel5], 
    desc: (
      <>
        Dynamic and supremely confident, the T’au have established a powerful empire of countless species working toward the philosophy of the Greater Good. This once-small civilisation now spreads like wildfire across the stars, its diplomatic efforts backed by armies of advanced battlesuits and alien auxiliaries, as it seeks to show its enemies the error of their ways.
        <br/><br/>
        <strong>FACTION KEYWORD:</strong> T'AU EMPIRE
      </>
    ) 
  }
];

const factionDataMap = {
  spacemarines: spaceMarineChapters,
  imperium: imperiumArmies,
  chaos: chaosArmies,
  xenos: xenosArmies,
};

export default function Armies() {
  const [activeFaction, setActiveFaction] = useState('spacemarines');
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [activeModelIndex, setActiveModelIndex] = useState(0);

  const factions = [
    { id: 'spacemarines', name: 'Space Marines', icon: spaceMarineIcon },
    { id: 'imperium', name: 'Armies of the Imperium', icon: imperiumIcon },
    { id: 'chaos', name: 'Forces of Chaos', icon: chaosIcon },
    { id: 'xenos', name: 'The Xenos Threat', icon: xenosIcon },
  ];

  // Logic chống sập web an toàn tuyệt đối
  const currentDataList = factionDataMap[activeFaction] || factionDataMap['spacemarines'];
  const safeChapterIndex = activeChapterIndex >= currentDataList.length ? 0 : activeChapterIndex;
  const currentChapter = currentDataList[safeChapterIndex];
  const safeModelIndex = activeModelIndex >= (currentChapter?.models?.length || 1) ? 0 : activeModelIndex;

  const handleNextChapter = () => {
    setActiveChapterIndex((prev) => (prev + 1) % currentDataList.length);
    setActiveModelIndex(0); 
  };
  const handlePrevChapter = () => {
    setActiveChapterIndex((prev) => (prev === 0 ? currentDataList.length - 1 : prev - 1));
    setActiveModelIndex(0); 
  };
  
  const handleChapterSelect = (index) => {
    setActiveChapterIndex(index);
    setActiveModelIndex(0);
  };

  const handleNextModel = () => {
    setActiveModelIndex((prev) => (prev + 1) % currentChapter.models.length);
  };
  const handlePrevModel = () => {
    setActiveModelIndex((prev) => (prev === 0 ? currentChapter.models.length - 1 : prev - 1));
  };

  return (
    <main className="main-content">
      <section className="armies-hero" style={{ backgroundImage: `url('${armiesBgImg}')` }}>
        <div className="armies-hero-overlay"></div>
        <div className="armies-hero-content">
          <h1>THE ARMIES OF THE<br/>41ST MILLENNIUM</h1>
        </div>
      </section>

      <section className="factions-section">
        <p className="factions-intro">
          Explore the warring factions of the far future – which one will you choose?
        </p>
        <div className="factions-nav">
          {factions.map((faction) => (
            <div
              key={faction.id}
              className={`faction-item ${activeFaction === faction.id ? 'active' : ''}`}
              onClick={() => {
                setActiveFaction(faction.id);
                setActiveChapterIndex(0); 
                setActiveModelIndex(0);
              }}
            >
              <div className="faction-icon-wrapper">
                  <img src={faction.icon} alt={faction.name} className="faction-icon-img" />
              </div>
              <span className="faction-name">{faction.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="faction-detail-container" style={{ backgroundImage: `url('${currentChapter?.bgImg}')` }}>
        <div className="detail-overlay"></div>

        <div className="detail-content-wrapper" key={currentChapter?.id}>
          
          <div className="detail-text-side">
            <img src={currentChapter?.logo} alt="Chapter Logo" className="detail-chapter-logo" />
            <h2 className="detail-title">{currentChapter?.name}</h2>
            <p className="detail-description">{currentChapter?.desc}</p>
            
            <div className="detail-nav-btns">
              <button className="nav-border-btn" onClick={handlePrevChapter}>PREVIOUS</button>
              <button className="nav-border-btn" onClick={handleNextChapter}>NEXT</button>
            </div>
          </div>

          <div className="detail-image-side">
             {currentChapter?.models?.length > 1 && (
               <button className="model-arrow-btn left-arrow" onClick={handlePrevModel}>❮</button>
             )}
             
             <img 
               key={currentChapter?.models?.[safeModelIndex]} 
               src={currentChapter?.models?.[safeModelIndex]} 
               alt={currentChapter?.name} 
               className="floating-model" 
             />
             
             {currentChapter?.models?.length > 1 && (
               <button className="model-arrow-btn right-arrow" onClick={handleNextModel}>❯</button>
             )}
          </div>
        </div>

        <div className="sub-factions-nav-wrapper">
          <div className="sub-factions-nav">
            {currentDataList.map((chap, index) => (
              <div 
                key={chap.id} 
                className={`sub-faction-item ${safeChapterIndex === index ? 'active' : ''}`}
                onClick={() => handleChapterSelect(index)}
              >
                <img src={chap.navIcon} alt={chap.name} className="sub-faction-icon" />
                <span className="sub-faction-name">
                  {chap.name.split(' ').map((word, i) => <Fragment key={i}>{word}<br/></Fragment>)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WHAT'S NEXT SECTION === */}
      <section className="whats-next-section">
        <div className="whats-next-container">
          <h2 className="whats-next-main-title">WHAT'S NEXT?</h2>
          
          <div className="whats-next-cards">
            
            {/* Thẻ bài 1: FIND A STARTER SET */}
            <div className="wn-card wn-card-1">
              <div className="wn-card-bg-layer-whats-next-1" style={{ backgroundImage: `url('${whatsNext1Bg}')` }}></div>
              <div className="wn-card-bg-layer-starter-set" style={{ backgroundImage: `url('${starterSetProduct}')` }}></div>
              <div className="wn-card-overlay"></div>
              <div className="wn-card-content">
                <h3>FIND A STARTER SET</h3>
                <p>Check out our range of comprehensive starter sets that can help you jump right into the Warhammer hobby – on your own, or with friends!</p>
                <button className="wn-btn yellow-btn">SEE MORE</button>
              </div>
            </div>

            {/* Thẻ bài 2: EXPLORE THE SETTING */}
            <div className="wn-card wn-card-2" style={{ backgroundImage: `url('${whatsNext2Bg}')` }}>
              <div className="wn-card-overlay"></div>
              <div className="wn-card-content">
                <h3>EXPLORE THE SETTING</h3>
                <p>Humanity is beset on all sides by terrible threats. Technology and science offer no hope, and there is no peace between the stars.</p>
                <button className="wn-btn outline-btn">SEE MORE</button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* === NEED MORE INFORMATION SECTION === */}
      <section className="need-info-section">
        <div className="need-info-container">
          <h2 className="whats-next-main-title" style={{ textAlign: 'left', marginBottom: '40px', color: '#fff' }}>NEED MORE INFORMATION?</h2>
          
          <div className="info-cards-wrapper">
            {/* Card 1: Imperium & Chaos */}
            <div className="info-card-final card-adeptus-mecha" style={{ backgroundImage: `url('${adeptusMechaIcon}')` }}>
              <div className="card-overlay-dark"></div>
              <div className="info-card-content">
                {/* Thẻ 1 */}
                <h3>
                  <span className="card-prefix-yellow">NEED HELP?</span><br/>
                  HEAD TO YOUR NEAREST STORE
                </h3>
                <p>Our friendly and knowledgeable staff will be able to help you with all of your Warhammer needs, from building and painting your first free miniature, to playing an introductory game, and more.</p>
                <button className="wn-btn yellow-btn">STORE FINDER</button>
              </div>
            </div>

            {/* Card 2: Xenos Factions */}
            <div className="info-card-final card-core-rules" style={{ backgroundImage: `url('${coreRulesProduct}')` }}>
              <div className="card-overlay-dark"></div>
              <div className="info-card-content">
                {/* Thẻ 2 */}
                <h3 style={{ color: '#fff' }}>
                  <span className="card-prefix-yellow">FREE CORE RULES</span><br/>
                  SIGN UP NOW
                </h3>
                <p>Sign up for our newsletters for a special Warhammer 40,000 email featuring the FREE Core Rules, and loads of other benefits to help you start your journey into the grim darkness of the far future.</p>
                <button className="wn-btn outline-btn">SIGN UP NOW</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}