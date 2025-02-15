const main = new Object();
main.actionBtn = new Object();
main.selectedCard = null;
main.doStrictSearch = true;
main.doStrictSearchBak = true;
main.allowedCost = undefined;
main.allowedUpgrade = undefined;
main.allowedCostBak = undefined;
main.allowedUpgradeBak = undefined;
main.LoadedCardAmount = 0;
main.toLoadCardAmount = 0;
main.inShowPredictData = false;
main.libCardInInplaceMode = false;
main.selectedCardInSubMode = undefined;
main.origImgShown = undefined;
main.rawChildOfFS_ForSwitchOrder = undefined;
main.doLcardResearch = false;

main.cardDisplayNameMap = {
	"All Out Attack": "All-Out Attack",
	"AscendersBane": "Ascender's Bane",
	"Cloak And Dagger": "Cloak and Dagger",
	"Crippling Poison": "Crippling Cloud",
	"Defend_G": "Defend (Silent)",
	"Defend_R": "Defend (Ironclad)",
	"HandOfGreed": "Hand of Greed",
	"Jack Of All Trades": "Jack of All Trades",
	"Night Terror": "Nightmare",
	"PanicButton": "Panic Button",
	"PiercingWail": "Piercing Wail",
	"Strike_G": "Strike (Silent)",
	"Strike_R": "Strike (Ironclad)",
	"Underhanded Strike": "Sneaky Strike",
	"Venomology": "Alchemize",
	"Well Laid Plans": "Well-Laid Plans",
	"Wraith Form v2": "Wraith Form"
}

main.cardCost = {
	'Neutralize': ['0', '0'], 'Shockwave': ['2', '2'], 'Second Wind': ['1', '1'], 'Inflame': ['1', '1'], 'Strike_R': ['1', '1'], 'Metallicize': ['1', '1'], 'Sucker Punch': ['1', '1'], 'Perfected Strike': ['2', '2'], 'Pommel Strike': ['1', '1'], 'Parasite': ['.', 'X'], 'Apotheosis': ['2', 'X'], 'Corpse Explosion': ['2', '2'], 'Rage': ['0', '0'], 'Envenom': ['2', 'X'], 'Well Laid Plans': ['1', '1'], 'Backstab': ['0', '0'], 'Blood for Blood': ['4', 'X'], 'Prepared': ['0', '0'], 'Caltrops': ['1', '1'], 'Mayhem': ['2', 'X'], 'Defend_R': ['1', '1'], 'Underhanded Strike': ['2', '2'], 'Infinite Blades': ['1', '1'], 'Armaments': ['1', '1'], 'Bloodletting': ['0', '0'], 'Burst': ['1', '1'], 'Flying Knee': ['1', '1'], 'Shrug It Off': ['1', '1'], 'Doppelganger': ['X', 'X'], 'Carnage': ['2', '2'], 'Hemokinesis': ['1', '1'], 'Rampage': ['1', '1'], 'Calculated Gamble': ['0', '0'], 'A Thousand Cuts': ['2', '2'], 'J.A.X.': ['0', '0'], 'Spot Weakness': ['1', '1'], 'Writhe': ['.', 'X'], 'Burning Pact': ['1', '1'], 'Secret Weapon': ['0', '0'], 'Evolve': ['1', '1'], 'Dramatic Entrance': ['0', '0'], 'Pain': ['.', 'X'], 'Warcry': ['0', '0'], 'True Grit': ['1', '1'], 'Finisher': ['1', '1'], 'Infernal Blade': ['1', 'X'], 'Deflect': ['0', '0'], 'Bludgeon': ['3', '3'], 'Choke': ['2', '2'], 'Regret': ['.', 'X'], 'Searing Blow': ['2', '2'], 'Escape Plan': ['0', '0'], 'Setup': ['1', 'X'], 'Predator': ['2', '2'], 'Flame Barrier': ['2', '2'], 'Catalyst': ['1', '1'], 'Disarm': ['1', '1'], 'Sword Boomerang': ['1', '1'], 'Acrobatics': ['1', '1'], 'Blade Dance': ['1', '1'], 'Expertise': ['1', '1'], 'Panacea': ['0', '0'], 'Thunderclap': ['1', '1'], 'Trip': ['0', '0'], 'The Bomb': ['2', '2'], 'Dropkick': ['1', '1'], 'Power Through': ['1', '1'], 'Whirlwind': ['X', 'X'], 'Concentrate': ['0', '0'], 'Venomology': ['1', 'X'], 'Purity': ['0', '0'], 'Bane': ['1', '1'], 'Clash': ['0', '0'], 'Die Die Die': ['1', '1'], 'Strike_G': ['1', '1'], 'HandOfGreed': ['2', '2'], 'Reaper': ['2', '2'], 'Crippling Poison': ['2', '2'], 'Deep Breath': ['0', '0'], 'Endless Agony': ['0', '0'], 'Flex': ['0', '0'], 'Flash of Steel': ['0', '0'], 'Heavy Blade': ['2', '2'], 'Survivor': ['1', '1'], 'Sentinel': ['1', '1'], 'Double Tap': ['1', '1'], 'AscendersBane': ['.', 'X'], 'Grand Finale': ['0', '0'], 'Slice': ['0', '0'], 'Secret Technique': ['0', '0'], 'Cloak And Dagger': ['1', '1'], 'Blur': ['1', '1'], 'Fire Breathing': ['1', '1'], 'Leg Sweep': ['2', '2'], 'Discovery': ['1', '1'], 'Terror': ['1', 'X'], 'Accuracy': ['1', '1'], 'Violence': ['0', '0'], 'Backflip': ['1', '1'], 'Exhume': ['1', 'X'], 'Storm of Steel': ['1', '1'], 'Flechettes': ['1', '1'], 'All Out Attack': ['1', '1'], 'Battle Trance': ['0', '0'], 'Poisoned Stab': ['1', '1'], 'Deadly Poison': ['1', '1'], 'Fiend Fire': ['2', '2'], 'Defend_G': ['1', '1'], 'PanicButton': ['0', '0'], 'Blind': ['0', '0'], 'Finesse': ['0', '0'], 'Ghostly Armor': ['1', '1'], 'Jack Of All Trades': ['0', '0'], 'Cleave': ['1', '1'], 'Wild Strike': ['1', '1'], 'Tactician': ['.', '.'], 'Iron Wave': ['1', '1'], 'Bullet Time': ['3', 'X'], 'Footwork': ['1', '1'], 'Reflex': ['.', '.'], 'Entrench': ['2', 'X'], 'Feel No Pain': ['1', '1'], 'Injury': ['.', 'X'], 'Dodge and Roll': ['1', '1'], 'Heel Hook': ['1', '1'], 'Metamorphosis': ['2', '2'], 'Rupture': ['1', '1'], 'Wraith Form v2': ['3', '3'], 'Good Instincts': ['0', '0'], 'Barricade': ['3', 'X'], 'Transmutation': ['X', 'X'], 'Decay': ['.', 'X'], 'Demon Form': ['3', '3'], 'Phantasmal Killer': ['1', 'X'], 'Clothesline': ['2', '2'], 'Dagger Throw': ['1', '1'], 'Body Slam': ['1', 'X'], 'Magnetism': ['2', 'X'], 'Panache': ['0', '0'], 'Adrenaline': ['0', '0'], 'Dark Embrace': ['2', 'X'], 'Bite': ['1', '1'], 'Havoc': ['1', 'X'], 'Twin Strike': ['1', '1'], 'Impatience': ['0', '0'], 'Skewer': ['X', 'X'], 'Intimidate': ['0', '0'], 'Juggernaut': ['2', '2'], 'Swift Strike': ['0', '0'], 'Dual Wield': ['1', '1'], 'Clumsy': ['.', 'X'], 'Anger': ['0', '0'], 'Chrysalis': ['2', '2'], 'Corruption': ['3', 'X'], 'Enlightenment': ['0', '0'], 'Immolate': ['2', '2'], 'Madness': ['1', 'X'], 'Master of Strategy': ['0', '0'], 'Offering': ['0', '0'], 'Uppercut': ['2', '2'], 'After Image': ['1', '1'], 'Combust': ['1', '1'], 'Noxious Fumes': ['1', '1'], 'Dark Shackles': ['0', '0'], 'Glass Knife': ['1', '1'], 'Eviscerate': ['3', '3'], 'Bandage Up': ['0', '0'], 'Night Terror': ['3', 'X'], 'Sadistic Nature': ['0', '0'], 'Outmaneuver': ['1', '1'], 'Dagger Spray': ['1', '1'], 'Feed': ['1', '1'], 'Forethought': ['0', '0'], 'Doubt': ['.', 'X'], 'Dash': ['2', '2'], 'Normality': ['.', 'X'], 'Headbutt': ['1', '1'], 'Sever Soul': ['2', '2'], 'Quick Slash': ['1', '1'], 'Pummel': ['1', '1'], 'Malaise': ['X', 'X'], 'Distraction': ['1', 'X'], 'Limit Break': ['1', '1'], 'Bouncing Flask': ['2', '2'], 'PiercingWail': ['1', '1'], 'Mind Blast': ['2', 'X'], 'Necronomicurse': ['.', 'X'], 'Seeing Red': ['1', 'X'], 'Berserk': ['0', '0'], 'Masterful Stab': ['0', '0'], 'Shame': ['X', 'X'], 'Tools of the Trade': ['1', 'X'], 'Bash': ['2', '2'], 'Reckless Charge': ['0', '0'], 'Thinking Ahead': ['0', '0'], 'Brutality': ['0', '0'], 'Unload': ['1', '1'], 'Impervious': ['2', '2']
}

main.predictHelper1 = (element, mode, percentile, cOrder, allLen) => {
	if (mode === 1) {
		element.style.backgroundColor = "rgba(0%,50%,0%,50%)";
		element.children[1].children[0].innerText = "Predict as 1st (Percentile from all cards: " + main.predictHelper2(percentile) + ", " + main.predictHelper3(cOrder, allLen) + ")\n" + element.children[1].children[0].innerText;
	} else if (mode === 2) {
		element.style.backgroundColor = "rgba(25%,25%,0%,50%)";
		element.children[1].children[0].innerText = "Predict as 2nd (Percentile from all cards: " + main.predictHelper2(percentile) + ", " + main.predictHelper3(cOrder, allLen) + ")\n" + element.children[1].children[0].innerText;
	} else {
		element.style.backgroundColor = "rgba(50%,0%,0%,50%)";
		element.children[1].children[0].innerText = "Predict as 3rd (Percentile from all cards: " + main.predictHelper2(percentile) + ", " + main.predictHelper3(cOrder, allLen) + ")\n" + element.children[1].children[0].innerText;
	}
}

main.predictHelper2 = (percentile) => {
	return percentile.toString().split(".")[0] + (percentile.toString().split(".")[1] ? "." + percentile.toString().split(".")[1].substring(0, 1) : "") + "%"
}

main.predictHelper3 = (cOrder, allLen) => {
	let l_suffix = "th";
	if (cOrder <= 20) {
		if (cOrder === 1) {
			l_suffix = "st";
		} else if (cOrder === 2) {
			l_suffix = "nd";
		} else if (cOrder === 3) {
			l_suffix = "rd";
		} else {

		}
	} else {
		if ((cOrder % 10) === 1) {
			l_suffix = "st";
		} else if ((cOrder % 10) === 2) {
			l_suffix = "nd";
		} else if ((cOrder % 10) === 3) {
			l_suffix = "rd";
		} else {

		}
	}
	return cOrder + l_suffix + " out of " + allLen;
}

main.predict = () => {
	main.resetPredictData();
	let tmp4 = [
		document.getElementById("pCard1").children[0].src.split("/").at(-1) !== "questionMark.png",
		document.getElementById("pCard2").children[0].src.split("/").at(-1) !== "questionMark.png",
		document.getElementById("pCard3").children[0].src.split("/").at(-1) !== "questionMark.png",
	]
	if (tmp4.every((x) => { return x; })) {
		/* for attempt show wait cursor while predict */
		document.getElementById('body').style.cursor = 'wait';
		document.getElementById('overlayScreenInit_mainText').innerText = "⌛ Predicting...";
		document.getElementById('overlayScreenInit_subText').innerText = "(program become unrespondsive for about 1 min, this is normal)";
		document.getElementById('overlayScreenInit').style.visibility = '';
		let tmp = rendererPreload.doPredict(main.getDeckStr());
		tmp.then((data) => {
			let l_allcardlen = data.split(",").length;
			let idxPC1 = data.split(",").indexOf(main.getInternalNameFromImg(document.getElementById("pCard1").children[0]));
			let idxPC2 = data.split(",").indexOf(main.getInternalNameFromImg(document.getElementById("pCard2").children[0]));
			let idxPC3 = data.split(",").indexOf(main.getInternalNameFromImg(document.getElementById("pCard3").children[0]));
			let tmp1 = [idxPC1 < idxPC2, idxPC1 < idxPC3, idxPC2 < idxPC3];
			let tmp3 = [
				100 - 100 * (idxPC1 / (data.split(",").length - 1)),
				100 - 100 * (idxPC2 / (data.split(",").length - 1)),
				100 - 100 * (idxPC3 / (data.split(",").length - 1))
			];
			let tmp5 = [
				idxPC1 + 1, idxPC2 + 1, idxPC3 + 1
			]
			let tmp2 = undefined;
			if (tmp1[0]) {
				if (tmp1[1]) {
					if (tmp1[2]) {
						// console.log([1,2,3])
						tmp2 = [document.getElementById("pCard3"), tmp3[2], tmp5[2],];
						main.predictHelper1(tmp2[0], 3, tmp2[1], tmp2[2], l_allcardlen);
						tmp2 = [document.getElementById("pCard2"), tmp3[1], tmp5[1],];
						main.predictHelper1(tmp2[0], 2, tmp2[1], tmp2[2], l_allcardlen);
						tmp2 = [document.getElementById("pCard1"), tmp3[0], tmp5[0],];
						main.predictHelper1(tmp2[0], 1, tmp2[1], tmp2[2], l_allcardlen);
					} else {
						// console.log([1,3,2])
						tmp2 = [document.getElementById("pCard2"), tmp3[1], tmp5[1]];
						main.predictHelper1(tmp2[0], 3, tmp2[1], tmp2[2], l_allcardlen);
						tmp2 = [document.getElementById("pCard3"), tmp3[2], tmp5[2]];
						main.predictHelper1(tmp2[0], 2, tmp2[1], tmp2[2], l_allcardlen);
						tmp2 = [document.getElementById("pCard1"), tmp3[0], tmp5[0]];
						main.predictHelper1(tmp2[0], 1, tmp2[1], tmp2[2], l_allcardlen);
					}
				} else {
					// console.log([2,3,1])
					tmp2 = [document.getElementById("pCard1"), tmp3[0], tmp5[0]];
					main.predictHelper1(tmp2[0], 2, tmp2[1], tmp2[2], l_allcardlen);
					tmp2 = [document.getElementById("pCard3"), tmp3[2], tmp5[2]];
					main.predictHelper1(tmp2[0], 1, tmp2[1], tmp2[2], l_allcardlen);
					tmp2 = [document.getElementById("pCard2"), tmp3[1], tmp5[1]];
					main.predictHelper1(tmp2[0], 3, tmp2[1], tmp2[2], l_allcardlen);
				}
			} else {
				if (tmp1[1]) {
					// console.log([2,1,3])
					tmp2 = [document.getElementById("pCard3"), tmp3[2], tmp5[2]];
					main.predictHelper1(tmp2[0], 3, tmp2[1], tmp2[2], l_allcardlen);
					tmp2 = [document.getElementById("pCard1"), tmp3[0], tmp5[0]];
					main.predictHelper1(tmp2[0], 2, tmp2[1], tmp2[2], l_allcardlen);
					tmp2 = [document.getElementById("pCard2"), tmp3[1], tmp5[1]];
					main.predictHelper1(tmp2[0], 1, tmp2[1], tmp2[2], l_allcardlen);
				} else {
					if (tmp1[2]) {
						// console.log([3,1,2])
						tmp2 = [document.getElementById("pCard2"), tmp3[1], tmp5[1]];
						main.predictHelper1(tmp2[0], 1, tmp2[1], tmp2[2], l_allcardlen);
						tmp2 = [document.getElementById("pCard1"), tmp3[0], tmp5[0]];
						main.predictHelper1(tmp2[0], 3, tmp2[1], tmp2[2], l_allcardlen);
						tmp2 = [document.getElementById("pCard3"), tmp3[2], tmp5[2]];
						main.predictHelper1(tmp2[0], 2, tmp2[1], tmp2[2], l_allcardlen);
					} else {
						// console.log([3,2,1])
						tmp2 = [document.getElementById("pCard1"), tmp3[0], tmp5[0]];
						main.predictHelper1(tmp2[0], 3, tmp2[1], tmp2[2], l_allcardlen);
						tmp2 = [document.getElementById("pCard2"), tmp3[1], tmp5[1]];
						main.predictHelper1(tmp2[0], 2, tmp2[1], tmp2[2], l_allcardlen);
						tmp2 = [document.getElementById("pCard3"), tmp3[2], tmp5[2]];
						main.predictHelper1(tmp2[0], 1, tmp2[1], tmp2[2], l_allcardlen);
					}
				}
			}
			document.getElementById('overlayScreenInit').style.visibility = 'hidden';
			document.getElementById('body').style.cursor = '';
		})
	} else {
		for (let tmpe of [1, 2, 3]) {
			let tmp5 = document.getElementById("pCard" + tmpe)
			tmp5.children[1].children[0].innerText = "<Cannot Predict, any of predict card placeholder is yet empty.>\n" + tmp5.children[1].children[0].innerText;
			if (tmp4[tmpe - 1]) { } else {
				tmp5.style.backgroundColor = "rgba(50%,0%,0%,100%)";
			}
		}
	}
	main.inShowPredictData = true;
};


main.clearDeck = () => {
	main.stopInplaceModeOfDeckCard();
	if (main.selectedCard !== null && main.selectedCard[0] === "d") {
		main.onEmptyAreaClick();
	}
	let tmp = document.getElementById("firstSection");
	for (let index = tmp.children.length - 1; index > 0; index--) {
		if (tmp.children[index].tagName == "DIV") {
			tmp.removeChild(tmp.children[index]);
		}
	}
	return;
};


main.getDeckStr = () => {
	let tmp = document.getElementById("firstSection");
	let tmp2 = [];
	for (let index = 0; index < tmp.children.length; index++) {
		if (tmp.children[index].tagName == "DIV") {
			let tmp1 = tmp.children[index].getAttribute("userattrib0");
			tmp1 = JSON.parse(tmp1);
			let tmp_name = main.transform2CardAttrib2ImgName(tmp1);
			tmp2.push(tmp_name);
		}
	}
	return tmp2.join(',');
};


main.onEmptyAreaClick = () => {
	main.goToMainPaneOfRedSection();
	main.selectedCard = null;
	document.getElementById("iCard_Bg").src = "questionMark.png";
	let tmp = document.getElementById("iCard_Where");
	tmp.innerText = "(Not yet selected)";
	document.getElementById("action1Btn").hidden = true;
	document.getElementById("action2Btn").hidden = true;
	document.getElementById("action3Btn").hidden = true;
	document.getElementById("action4Btn").hidden = true;
	document.getElementById("action5Btn").hidden = true;
	document.getElementById("action6Btn").hidden = true;
	return;
}


main.onDeckClick = (what) => {
	if (main.selectedCard && main.selectedCard[1]) {
		main.selectedCard[1].style.filter = "";
	}
	what.style.filter = "drop-shadow(0px 0px 1.5625vmin yellow) contrast(8) invert()";
	main.stopInplaceModeOfDeckCard();
	main.goToMainPaneOfRedSection();
	let cardName = (JSON.parse(what.attributes.userattrib0.textContent))[0];
	let cardUpgrade = (JSON.parse(what.attributes.userattrib0.textContent))[1];
	main.selectedCard = ["d", what, cardName, cardUpgrade];
	document.getElementById("iCard_Bg").src = "./cardImgs/" + main.transform2CardAttrib2ImgName([cardName, cardUpgrade]) + ".png";
	tmp = document.getElementById("iCard_Where");
	tmp.innerText = "(Selected From Your Deck)";
	document.getElementById("action1Btn_Text").innerHTML = "📖 Goto Card's Wiki URL";
	document.getElementById("action2Btn_Text").innerHTML = "🗑️ Remove from Deck";
	document.getElementById("action3Btn_Text").innerHTML = "🎚️ Up/Downgrade";
	document.getElementById("action4Btn_Text").innerHTML = "🔃 Change Card in-place";
	document.getElementById("action5Btn_Text").innerHTML = "🔃 Switch order in deck";
	document.getElementById("action1Btn").hidden = false;
	document.getElementById("action2Btn").hidden = false;
	document.getElementById("action3Btn").hidden = false;
	document.getElementById("action4Btn").hidden = false;
	document.getElementById("action5Btn").hidden = false;
	document.getElementById("action6Btn").hidden = true;
	document.getElementById("action1Btn").onclick = () => { main.actionBtn.goToWiki(main.selectedCard[2]); };
	document.getElementById("action2Btn").onclick = () => { main.actionBtn.removeFromDeck(main.selectedCard[1]); };
	document.getElementById("action3Btn").onclick = (event) => {
		document.getElementById("iCard_NextPane_ugAdjust_ugField").value = cardUpgrade;
		document.getElementById("iCard_NextPane_ugAdjust_ugField").max = main.cardList[cardName];
		document.getElementById("iCard_NextPane_ugAdjust_maxVal").textContent = main.cardList[cardName];
		main.goToMainNextPaneOfRedSection("ugAdjust");
	};
	document.getElementById("action4Btn").onclick = (event) => {
		main.libCardInInplaceMode = true;
		document.getElementById("iCard_NextPane_replaceCard_wiki_btn").hidden = true;
		document.getElementById("iCard_NextPane_replaceCard_confirm_btn").hidden = true;
		main.goToMainNextPaneOfRedSection("replaceCard");
	};
	document.getElementById("action5Btn").onclick = () => {
		main.rawChildOfFS_ForSwitchOrder = Array.from(document.getElementById("firstSection").children);
		document.getElementById("iCard_NextPane_switchOrder_ugField").value = main.rawChildOfFS_ForSwitchOrder.indexOf(main.selectedCard[1]);
		document.getElementById("iCard_NextPane_switchOrder_ugField").max = main.rawChildOfFS_ForSwitchOrder.length - 1;
		document.getElementById("iCard_NextPane_switchOrder_maxVal").textContent = document.getElementById("iCard_NextPane_switchOrder_ugField").max;
		delete main.rawChildOfFS_ForSwitchOrder[main.rawChildOfFS_ForSwitchOrder.indexOf(main.selectedCard[1])];
		main.rawChildOfFS_ForSwitchOrder = main.rawChildOfFS_ForSwitchOrder.flat();
		main.goToMainNextPaneOfRedSection("switchOrder");
	};
	// document.getElementById("action6Btn").onclick = () => { main.actionBtn.putCard2Predict([main.selectedCard[2], main.selectedCard[3]], 2); };
	return;
}


main.onPredictClick = (idx) => {
	main.stopInplaceModeOfDeckCard();
	main.goToMainPaneOfRedSection();
	let what = document.getElementById("midSection_A").children[idx];
	if (main.selectedCard && main.selectedCard[1]) {
		main.selectedCard[1].style.filter = "";
	}
	what.style.filter = "drop-shadow(0px 0px 1.5625vmin yellow) contrast(8) invert()";
	if (what.children[0].attributes.src.textContent === "questionMark.png") {
		main.selectedCard = ["p", what, null, null];
		document.getElementById("iCard_Bg").src = "questionMark.png";
		let tmp = document.getElementById("iCard_Where");
		tmp.innerText = "(You are selected empty card slot)";
		document.getElementById("action1Btn").hidden = true;
		document.getElementById("action2Btn").hidden = true;
		document.getElementById("action3Btn").hidden = true;
		document.getElementById("action4Btn").hidden = true;
		document.getElementById("action5Btn").hidden = true;
		document.getElementById("action6Btn").hidden = true;
	} else {
		let tmp = main.transformThatImgTo2CardAttrib(what.children[0]);
		main.selectedCard = ["p", what, tmp[0], tmp[1]];
		document.getElementById("iCard_Bg").src = what.children[0].src;
		tmp = document.getElementById("iCard_Where");
		tmp.innerText = "(Selected From Predict Placeholder)";
		document.getElementById("action1Btn_Text").innerHTML = "📖 Goto Card's Wiki URL";
		document.getElementById("action2Btn_Text").innerHTML = "💾 Put to deck";
		document.getElementById("action1Btn").hidden = false;
		document.getElementById("action2Btn").hidden = false;
		document.getElementById("action3Btn").hidden = true;
		document.getElementById("action4Btn").hidden = true;
		document.getElementById("action5Btn").hidden = true;
		document.getElementById("action6Btn").hidden = true;
		document.getElementById("action1Btn").onclick = () => { main.actionBtn.goToWiki(main.selectedCard[2]); };
		document.getElementById("action2Btn").onclick = () => { main.actionBtn.putCard2Deck([main.selectedCard[2], main.selectedCard[3]]); };
	}
	return;
}

main.onLibClick = (element) => {
	if (!main.libCardInInplaceMode) {
		if (main.selectedCard && main.selectedCard[1]) {
			main.selectedCard[1].style.filter = "";
		}
	} else {
		if (main.selectedCardInSubMode && main.selectedCardInSubMode[1]) {
			main.selectedCardInSubMode[1].style.filter = "";
		}
	}
	element.style.filter = "drop-shadow(0px 0px 1.5625vmin yellow) contrast(8) invert()";
	let data = main.transformThatImgTo2CardAttrib(element);
	if (!main.libCardInInplaceMode) {
		main.goToMainPaneOfRedSection();
		main.selectedCard = ["l", element, data[0], data[1]];
		document.getElementById("iCard_Bg").src = "./cardImgs/" + main.transform2CardAttrib2ImgName(data) + ".png";
		tmp = document.getElementById("iCard_Where");
		tmp.innerText = "(Selected From Library)";
		document.getElementById("action1Btn_Text").innerHTML = "📖 Goto Card's Wiki URL";
		document.getElementById("action2Btn_Text").innerHTML = "💾 Put to deck";
		document.getElementById("action3Btn_Text").innerHTML = "🏆 Set to 1st predict card placeholder";
		document.getElementById("action4Btn_Text").innerHTML = "🏆 Set to 2nd predict card placeholder";
		document.getElementById("action5Btn_Text").innerHTML = "🏆 Set to 3rd predict card placeholder";
		document.getElementById("action1Btn").hidden = false;
		document.getElementById("action2Btn").hidden = false;
		document.getElementById("action3Btn").hidden = false;
		document.getElementById("action4Btn").hidden = false;
		document.getElementById("action5Btn").hidden = false;
		document.getElementById("action6Btn").hidden = true;
		document.getElementById("action1Btn").onclick = () => { main.actionBtn.goToWiki(main.selectedCard[2]); };
		document.getElementById("action2Btn").onclick = () => { main.actionBtn.putCard2Deck(data); };
		document.getElementById("action3Btn").onclick = () => { main.actionBtn.putCard2Predict(data, 0); };
		document.getElementById("action4Btn").onclick = () => { main.actionBtn.putCard2Predict(data, 1); };
		document.getElementById("action5Btn").onclick = () => { main.actionBtn.putCard2Predict(data, 2); };
		return;
	} else {
		main.selectedCardInSubMode = ["l", element, data[0], data[1]];
		main.origImgShown = document.getElementById("iCard_Bg").src;
		document.getElementById("iCard_NextPane_replaceCard_wiki_btn").hidden = false;
		document.getElementById("iCard_NextPane_replaceCard_confirm_btn").hidden = false;
		document.getElementById("iCard_Bg").src = "./cardImgs/" + main.transform2CardAttrib2ImgName(data) + ".png";
	}
}

main.actionBtn.goToWiki = (name) => {
	let tmpDE1 = document.getElementById('overlayScreenInit');
	let tmpDE2 = document.getElementById('overlayScreenWiki');
	let tmpDE3 = document.getElementById('olsWikiIFrame');
	/* for attempt show wait cursor while load */
	document.getElementById('body').style.cursor = 'wait';
	document.getElementById('overlayScreenInit_mainText').innerText = "⌛ Loading Wiki Page...";
	document.getElementById('overlayScreenInit_subText').innerText = "";
	tmpDE1.style.visibility = '';
	name = main.getCardDisplayName(name);
	tmpDE3.onload = () => {
		tmpDE3.onload = undefined;
		document.getElementById('body').style.cursor = '';
		tmpDE2.style.visibility = 'visible';
		tmpDE1.style.visibility = 'hidden';
	}
	tmpDE3.src = "https://slay-the-spire.fandom.com/wiki/" + name;
}

main.onWikiClosing = () => {
	document.getElementById('overlayScreenWiki').style.visibility = '';
	document.getElementById('olsWikiIFrame').src = '';
}

main.actionBtn.removeFromDeck = (what) => {
	main.onEmptyAreaClick();
	what.remove();
}

main.transformThatImgTo2CardAttrib = (img) => {
	let tmp = decodeURI(img.src).split('/').at(-1).replace(".png", "").split("+");
	if (tmp.length === 1) {
		tmp = [tmp[0], 0];
	}
	tmp[1] = parseInt(tmp[1]);
	return tmp;
}

main.getInternalNameFromImg = (img) => {
	let tmp = decodeURI(img.src).split('/').at(-1).replace(".png", "");
	return tmp;
}

main.transform2CardAttrib2ImgName = (data) => {
	if (data[1] === 0) { return data[0]; }
	else { return data[0] + "+" + data[1]; }
}

main.lCardSearch = () => {
	document.getElementById('body').style.cursor = 'wait';
	let tmp_anyOfAllowCost = Object.values(main.allowedCost).some(element => { return element; });
	let tmp_anyOfAllowUg = Object.values(main.allowedUpgrade).some(element => { return element; });
	let tmp = document.getElementById("lCard_SearchBox").value.toLowerCase();
	if (tmp === '' && !tmp_anyOfAllowCost && !tmp_anyOfAllowUg) {
		for (let tmpe of document.getElementById("lCard_list").children) {
			tmpe.hidden = false;
		}
	}
	else {
		tmp = tmp.split(' ');
		let tmp3 = undefined;
		for (let tmpe of document.getElementById("lCard_list").children) {
			if (tmpe.tagName !== "IMG") {
				// in if clause check if in init phrase which tmp3 is undefined
				if (tmp3 === undefined) {
				} else {
					tmp3[0].hidden = !tmp3[1];
				}
				// 1st: is element of current pointing toalphabet-group header; 2nd is whether we should show that element
				tmp3 = [tmpe, false];
				continue;
			} else {
				let tmp5 = main.transformThatImgTo2CardAttrib(tmpe);
				let tmp2 = tmp5[0];
				let tmp7 = tmp5[1];
				let tmp8 = main.cardCost[tmp2][tmp7];
				tmp2 = (main.getCardDisplayName(tmp2)).toLowerCase();
				let tmp4 = true;
				let tmp6 = undefined;
				// [FS:Cost Zone]
				if (tmp_anyOfAllowCost) {
					tmp6 = Object.entries(main.allowedCost).filter(element => { return element[1]; }).map(element => { return element[0]; });
					if (tmp6.includes(tmp8)) { } else { tmp4 = false; }
				}
				// [FS:Ug Zone]
				if (tmp4 && tmp_anyOfAllowUg) {
					tmp6 = Object.entries(main.allowedUpgrade).filter(element => { return element[1]; }).map(element => { return parseInt(element[0]); });
					if (tmp6.includes(tmp7)) { } else { tmp4 = false; }
				}
				// [String Search Zone + Skip process when above condition failed]
				if (tmp4) {
					// From now tmp4 would switch meaning, =false mean to show
					if (!main.doStrictSearch) {
						tmp4 = true;
						for (let tmpe2 of tmp) {
							if (tmp2.includes(tmpe2)) {
								tmp4 = false;
								break;
							}
						}
					} else {
						// if splited str have len of 0
						if (tmp.length !== 0) {
							tmp4 = false;
							for (let tmpe2 of tmp) {
								if (!tmp2.includes(tmpe2)) {
									tmp4 = true;
									break;
								}
							}
						} else { tmp4 = true; }
					}
					if (!tmp4) {
						tmp3[1] = true;
						tmpe.hidden = false;
					} else {
						tmpe.hidden = true;
					}
				} else {
					tmpe.hidden = true;
				}
				// <ZONE END>
			}
		}
		// Decidsion of showing last alphabet-group header or not
		tmp3[0].hidden = !tmp3[1];
	}
	main.doLcardResearch = false;
	document.getElementById("lCard_list").hidden = false;
	main.setState__lCard_FS_REVERTbtn(false);
	document.getElementById('body').style.cursor = '';
}

main.showLCardFilterSetting = () => {
	if (document.getElementById("lCard_list").hidden) {
		document.getElementById("lCard_FilterSetting").hidden = true;
		document.getElementById("lCard_SearchBox").hidden = false;
		document.getElementById("lCard_SearchBtn").innerText = "⚙️ Filter";
		if (main.doLcardResearch) {
			// document.getElementById("lCard_list").hidden = false;
			// ... is existed in this func
			main.lCardSearch();
		} else { document.getElementById("lCard_list").hidden = false; }
	}
	else {
		main.LCardFSSnapshotB();
		document.getElementById("lCard_list").hidden = true;
		document.getElementById("lCard_FilterSetting").hidden = false;
		document.getElementById("lCard_SearchBox").hidden = true;
		document.getElementById("lCard_SearchBtn").innerText = "➖ Collapse";
	}

}

main.setState__lCard_FS_REVERTbtn = (state) => {
	if (state) {
		document.getElementById("lCard_FS_REVERTbtn").disabled = false;
		document.getElementById("lCard_FS_REVERTbtn").textContent = "↩️ Revert Search Filter Setting to currently used";
	} else {
		document.getElementById("lCard_FS_REVERTbtn").disabled = true;
		document.getElementById("lCard_FS_REVERTbtn").textContent = "✅ No any changes to revert";
	}
};


main.setState__lCard_FS_RESETbtn = (state) => {
	if (state) {
		document.getElementById("lCard_FS_RESETbtn").disabled = false;
		document.getElementById("lCard_FS_RESETbtn").textContent = "🏭 RESET Search Filter Setting to default";
	} else {
		document.getElementById("lCard_FS_RESETbtn").disabled = true;
		document.getElementById("lCard_FS_RESETbtn").textContent = "✅ Current setting is now default";
	}
};

// Don't forget to override this method's action when trigger update/invupdate by RESET/REVERSE
// Except in init of prog. because main.markLCardFSInited is done that for us
main.markLCardFSAltered = () => {
	main.doLcardResearch = true;
	main.setState__lCard_FS_REVERTbtn(true);
	main.setState__lCard_FS_RESETbtn(true);
};

main.markLCardFSInited = () => {
	main.doLcardResearch = false;
	main.setState__lCard_FS_REVERTbtn(false);
	main.setState__lCard_FS_RESETbtn(false);
};

main.LCardFSSnapshotB = () => {
	main.doStrictSearchBak = main.doStrictSearch;
	main.allowedCostBak = Object.assign({}, main.allowedCost);
	main.allowedUpgradeBak = Object.assign({}, main.allowedUpgrade);
};

main.revertLCardFilter = () => {
	main.doStrictSearch = main.doStrictSearchBak;
	main.allowedCost = Object.assign({}, main.allowedCostBak);
	main.allowedUpgrade = Object.assign({}, main.allowedUpgradeBak);
	main.invupdate__lCard_FS_SSmode();
	for (let tmpe of Object.keys(main.allowedCost)) {
		main.invupdate__lCard_FS_shown(0, tmpe);
	}
	for (let tmpe of Object.keys(main.allowedUpgrade)) {
		main.invupdate__lCard_FS_shown(1, tmpe);
	}
	main.doLcardResearch = false;
	main.setState__lCard_FS_REVERTbtn(false);
	main.setState__lCard_FS_RESETbtn(true);
};

main.resetLCardFilter = () => {
	main.doStrictSearch = true;
	main.invupdate__lCard_FS_SSmode();
	// ---
	for (let tmpe of Object.keys(main.allowedCost)) {
		main.allowedCost[tmpe] = false;
		main.invupdate__lCard_FS_shown(0, tmpe);
	}
	for (let tmpe of Object.keys(main.allowedUpgrade)) {
		main.allowedUpgrade[tmpe] = false;
		main.invupdate__lCard_FS_shown(1, tmpe);
	}
	main.setState__lCard_FS_REVERTbtn(true);
	main.setState__lCard_FS_RESETbtn(false);
}

main.update__lCard_FS_SSmode = () => {
	main.markLCardFSAltered();
	main.doStrictSearch = document.getElementById("lCard_FS_doSS").checked;
}

main.invupdate__lCard_FS_SSmode = () => {
	main.markLCardFSAltered();
	document.getElementById("lCard_FS_doSS").checked = main.doStrictSearch;
}

// Params: mode: 0=Cost, 1=Ug
main.update__lCard_FS_shown = (mode, val) => {
	main.markLCardFSAltered();
	let element = document.getElementById("lCard_FS_shown" + (mode ? "Ug" : "C") + "_" + val.toString());
	if (mode === 0) {
		main.allowedCost[val] = element.checked;
	} else {
		main.allowedUpgrade[val] = element.checked;
	}
}
// Params: mode: 0=Cost, 1=Ug
main.invupdate__lCard_FS_shown = (mode, val) => {
	main.markLCardFSAltered();
	let element = document.getElementById("lCard_FS_shown" + (mode ? "Ug" : "C") + "_" + val.toString());
	if (mode === 0) {
		element.checked = main.allowedCost[val];
	} else {
		element.checked = main.allowedUpgrade[val];
	}
}

main.getUniqueCostVal = () => {
	let uniqueCostVal = new Set();
	for (let tmpe of Object.values(main.cardCost)) {
		for (let tmpe2 of tmpe) {
			uniqueCostVal.add(tmpe2);
		}
	}
	return uniqueCostVal;
}

main.getUniqueUgVal = () => {
	let tmp1 = Infinity;
	let tmp2 = -Infinity;
	for (let tmpe of Object.values(main.cardList)) {
		tmp1 = Math.min(tmpe, tmp1);
		tmp2 = Math.max(tmpe, tmp2);
	}
	return [tmp1, tmp2];
}

main.getCardDisplayName = (name) => {
	return main.cardDisplayNameMap[name] ? main.cardDisplayNameMap[name] : name;
}


main.helperDeckCardEdit_Phase1 = (data) => {
	let cardInternalName = data[0];
	let cardUg = data[1];
	let cardCost = main.cardCost[cardInternalName][cardUg];
	let cardDpName = main.getCardDisplayName(cardInternalName);
	let cardDpUg = "";
	if (cardUg > 0) {
		cardDpUg = " ( + " + cardUg + " )";
	}
	return [cardInternalName, cardDpName, cardUg, cardDpUg, cardCost];
}

main.helperDeckCardEdit_Phase2 = (data, htmle) => {
	let tmp1 = htmle;
	tmp1.setAttribute("userattrib0", JSON.stringify([data[0], data[2]]));
	tmp1.children[0].innerText = data[4];
	tmp1.children[1].innerText = data[1] + data[3];
}

main.actionBtn.putCard2Deck = (data) => {
	let processedData = main.helperDeckCardEdit_Phase1(data);
	let tmp = '<div customtype="dCard" hidden  onclick="main.onDeckClick(this)" class="general dCard ignoreDefExtendSize ExtendH addDefBorder addDefMarginBottom  ">\n' +
		'<div class="general dCardHeadNum   addDefBorder setNegateColorBorder"><p class=" general text"></p></div>\n' +
		'<div class="general dCardName textnegate  addScrollOverflow_H"></div>\n</div>';
	document.getElementById("firstSection").insertAdjacentHTML("beforeend", tmp);
	let tmp1 = document.getElementById("firstSection").children[document.getElementById("firstSection").children.length - 1];
	main.helperDeckCardEdit_Phase2(processedData, tmp1);
};

main.inplaceCardEdit = (twoAttribs, index) => {
	let targetE = document.getElementById("firstSection").children[index + 1];
	inplaceCardEdit_GivenElement(twoAttribs, targetE);
};

main.inplaceCardEdit_GivenElement = (twoAttribs, targetE) => {
	let processedData = main.helperDeckCardEdit_Phase1(twoAttribs);
	main.helperDeckCardEdit_Phase2(processedData, targetE);
};

main.actionBtn.putCard2Predict = (data, idx) => {
	main.resetPredictData();
	let mainE = document.getElementById("midSection_A").children[idx];
	mainE.children[0].src = "./cardImgs/" + main.transform2CardAttrib2ImgName(data) + ".png";
	mainE.children[1].children[0].innerText = main.getCardDisplayName(data[0]) + " (Cost: " + main.cardCost[data[0]][data[1]] + ", Upgrade: " + data[1] + ")";
}

main.resetPredictData = () => {
	if (main.inShowPredictData) {
		for (let tmpe of [1, 2, 3]) {
			tmpe = document.getElementById("pCard" + tmpe);
			tmpe.style.backgroundColor = "";
			tmpe.children[1].children[0].innerText = tmpe.children[1].children[0].innerText.split("\n")[1];
			main.inShowPredictData = false;
		}
	}
}

main.goToMainPaneOfRedSection = () => {
	main.stopInplaceModeOfDeckCard();
	if (main.origImgShown) {
		document.getElementById("iCard_Bg").src = main.origImgShown;
		main.origImgShown = undefined;
	}
	document.getElementById("iCard_NextPane").style.display = "none";
	document.getElementById("iCard_Pane").hidden = false;
}
main.goToMainNextPaneOfRedSection = (whatSection) => {
	let sectionHeader = ["iCard_NextPane_", "_div"];
	document.getElementById(sectionHeader[0] + "ugAdjust" + sectionHeader[1]).hidden = true;
	document.getElementById(sectionHeader[0] + "replaceCard" + sectionHeader[1]).hidden = true;
	document.getElementById(sectionHeader[0] + "switchOrder" + sectionHeader[1]).hidden = true;
	document.getElementById(sectionHeader[0] + whatSection + sectionHeader[1]).hidden = false;
	document.getElementById("iCard_Pane").hidden = true;
	document.getElementById("iCard_NextPane").style.display = "inherit";
}

main.acceptUgValue = () => {
	let tmp1 = document.getElementById("iCard_NextPane_ugAdjust_ugField");
	tmp1.setCustomValidity("");
	if (Boolean(tmp1.value.match("^[0-9]+$"))) {
		if (tmp1.checkValidity()) {
			main.inplaceCardEdit_GivenElement([main.selectedCard[2], parseInt(tmp1.value)], main.selectedCard[1]);
			main.onDeckClick(main.selectedCard[1]);
		} else {
			tmp1.reportValidity();
		}
	} else {
		tmp1.setCustomValidity("Value must contains only letters of number");
		tmp1.reportValidity();
	}
}

main.acceptInplaceCard = () => {
	let tmp = [main.selectedCardInSubMode[2], main.selectedCardInSubMode[3]];
	main.inplaceCardEdit_GivenElement(tmp, main.selectedCard[1]);
	main.onDeckClick(main.selectedCard[1]);
}

main.stopInplaceModeOfDeckCard = () => {
	if (main.selectedCardInSubMode && main.selectedCardInSubMode[1]) {
		main.selectedCardInSubMode[1].style.filter = "";
	}
	main.selectedCardInSubMode = undefined;
	main.libCardInInplaceMode = false;
}

main.acceptSwitchOrderCard = (mode) => {
	if (mode) {
		let tmp1 = document.getElementById("iCard_NextPane_switchOrder_ugField");
		if (mode === "+") {
			tmp1.value = tmp1.max;
			main.acceptSwitchOrderCard();
		} else if (mode === "-") {
			tmp1.value = tmp1.min;
			main.acceptSwitchOrderCard();
		} else {
			let tmp2 = parseInt(tmp1.value) + mode;
			if (tmp2 < tmp1.min) { tmp2 = tmp1.min; }
			else if (tmp2 > tmp1.max) { tmp2 = tmp1.max; }
			tmp1.value = tmp2;
			main.acceptSwitchOrderCard();
		}
	} else {
		let tmp1 = document.getElementById("iCard_NextPane_switchOrder_ugField");
		tmp1.setCustomValidity("");
		if (Boolean(tmp1.value.match("^[0-9]+$"))) {
			if (tmp1.checkValidity()) {
				let setOrder = document.getElementById("iCard_NextPane_switchOrder_ugField").value;
				let finalDeckCardList = [].concat(main.rawChildOfFS_ForSwitchOrder.slice(0, setOrder), main.selectedCard[1], main.rawChildOfFS_ForSwitchOrder.slice(setOrder));
				document.getElementById("firstSection").replaceChildren(...finalDeckCardList);
			} else {
				tmp1.reportValidity();
			}
		} else {
			tmp1.setCustomValidity("Value must contains only letters of number");
			tmp1.reportValidity();
		}
	}
}

rendererPreload.getcardLibPromise.then((data) => {
	main.cardList = data;
	// [lCard Filter Search Zone START]
	main.invupdate__lCard_FS_SSmode();
	main.allowedCost = {}
	for (let tmpe of main.getUniqueCostVal()) {
		main.allowedCost[tmpe] = false;
	}
	main.allowedUpgrade = {}
	for (let tmpe of main.getUniqueUgVal()) {
		main.allowedUpgrade[tmpe] = false;
	}
	let tmp_elements = Object.keys(main.allowedCost).sort();
	let tmp_len = tmp_elements.length;
	let tmp_bigdivlen = Math.ceil(tmp_len / 3);
	let tmp_bigdivpointer = 0;
	let tmp_smalldivpointer = 0;
	let mode = "C";
	let tmp_listE = document.getElementById("lCard_FS_shown" + mode + "_list");
	for (let tmpi = 0; tmpi < tmp_bigdivlen; tmpi++) {
		tmp_listE.insertAdjacentHTML("beforeend", '<div class="general container setContainerH" ></div>');
	}
	let tmp_listE_Child = tmp_listE.children;
	tmp_elements.forEach(element => {
		if (tmp_smalldivpointer >= 3) {
			tmp_bigdivpointer += 1;
			tmp_smalldivpointer = 0;
		}
		let val = element;
		let val2 = val;
		if (val === ".") {
			val2 = "Non-marked-as-X and No Cost";
		} else if (val === "X") {
			val2 = "Marked as X";
		}
		tmp_listE_Child[tmp_bigdivpointer].insertAdjacentHTML("beforeend", '<div class="general container ignoreDefExtendSize ExtendH addMarginForCB"><input id="lCard_FS_shown' + mode + '_' + val + '" type="checkbox" class="general ignoreDefExtendSize ExtendH lCard_FS_CbLeftPane" attrib="" onchange="main.update__lCard_FS_shown(' + (mode === "C" ? "0" : "1") + ',' + (mode === "C" ? "'" + val + "'" : val) + ')"><p class="general  ignoreDefExtendSize ExtendH  textnegate setTextAlignLeft lCard_FS_CbRightPane">' + val2 + '</p></div>');
		tmp_smalldivpointer += 1;
	});
	tmp_elements = Object.keys(main.allowedUpgrade).sort();
	tmp_len = tmp_elements.length;
	tmp_bigdivlen = Math.ceil(tmp_len / 3);
	tmp_bigdivpointer = 0;
	tmp_smalldivpointer = 0;
	mode = "Ug";
	tmp_listE = document.getElementById("lCard_FS_shown" + mode + "_list");
	for (let tmpi = 0; tmpi < tmp_bigdivlen; tmpi++) {
		tmp_listE.insertAdjacentHTML("beforeend", '<div class="general container setContainerH" ></div>');
	}
	tmp_listE_Child = tmp_listE.children;
	tmp_elements.forEach(element => {
		if (tmp_smalldivpointer >= 3) {
			tmp_bigdivpointer += 1;
			tmp_smalldivpointer = 0;
		}
		let val = element;
		tmp_listE_Child[tmp_bigdivpointer].insertAdjacentHTML("beforeend", '<div class="general container ignoreDefExtendSize ExtendH addMarginForCB"><input id="lCard_FS_shown' + mode + '_' + val + '" type="checkbox" class="general ignoreDefExtendSize ExtendH lCard_FS_CbLeftPane" attrib="" onchange="main.update__lCard_FS_shown(' + (mode === "C" ? "0" : "1") + ',' + (mode === "C" ? "'" + val + "'" : val) + ')"><p class="general  ignoreDefExtendSize ExtendH  textnegate setTextAlignLeft lCard_FS_CbRightPane">' + val + '</p></div>');
		tmp_smalldivpointer += 1;
	});
	// <lCard Filter Search Zone END>
	// any thing must go above here(the lcard html element putting process) 
	let tmp3 = '';
	for (let tmpe in main.cardList) {
		if (tmpe.substring(0, 1) !== tmp3) {
			tmp3 = tmpe.substring(0, 1);
			document.getElementById("lCard_list").insertAdjacentHTML("beforeEnd", "<h1 class=\"general textnegate lCardHeader ignoreDefExtendSize ExtendH\">" + tmp3 + "</h1>");
		}
		for (let tmpi = 0; tmpi <= main.cardList[tmpe]; tmpi++) {
			main.toLoadCardAmount += 1;
			let tmp1 = undefined; let tmp2 = undefined;
			if (tmpi === 0) { tmp1 = tmpe; } else { tmp1 = tmpe + "+" + tmpi }
			tmp2 = new Image();
			tmp2.classList.add("general"); tmp2.classList.add("lCard"); tmp2.classList.add("ignoreDefExtendSize"); tmp2.classList.add("addDefMarginBottom"); tmp2.classList.add("addDefMarginRight"); tmp2.src = "./cardImgs/" + tmp1 + ".png"; tmp2.onclick = (event) => { main.onLibClick((event.srcElement)); };
			tmp2.onload = () => {
				if (main.LoadedCardAmount <= main.toLoadCardAmount) {
					main.LoadedCardAmount += 1;
					if (main.LoadedCardAmount == main.toLoadCardAmount) {
						main.markLCardFSInited();
						document.getElementById('overlayScreenInit').style.visibility = 'hidden';
					}
				}
			};
			document.getElementById("lCard_list").appendChild(tmp2);
		}
	}
})