var riddles = [{
	question: "Gdzie znajduje się gwiazdka?",
	icons: ["star", "gift", "heart"],
	answer: "star"
}, {
	question: "Pokaż liść",
	icons: ["star", "leaf", "heart"],
	answer: "leaf"
}, {
	question: "Pokaż kłódkę",
	icons: ["lock", "leaf", "heart"],
	answer: "lock"
}, {
	question: "Gdzie znajduje się serce?",
	icons: ["lock", "twitter", "heart"],
	answer: "heart"
}, {
	question: "Pokaż piorun",
	icons: ["lightning", "cloud", "brightness-medium"],
	answer: "lightning"
}, {
	question: "Pokaż chmurę",
	icons: ["brightness-medium", "lightning", "cloud"],
	answer: "cloud"
}, {
	question: "Pokaż słońce",
	icons: ["cloud", "brightness-medium", "lightning"],
	answer: "brightness-medium"
}, {
	question: "Gdzie znajduje się klucz?",
	icons: ["wrench", "bell", "leaf"],
	answer: "wrench"
}, {
	question: "Gdzie znajduje się klucz?",
	icons: ["heart", "key", "cloud"],
	answer: "key"
}, {
	question: "Gdzie znajduje się klucz?",
	icons: ["cloud", "bell", "key2"],
	answer: "key2"
}, {
	question: "Gdzie znajduje się prezent?",
	icons: ["key2", "gift", "bell"],
	answer: "gift"
}, {
	question: "Gdzie znajduje się apteczka?",
	icons: ["cloud", "aid", "wrench"],
	answer: "aid"
}, {
	question: "Pokaż robaczka?",
	icons: ["lock", "bug", "heart"],
	answer: "bug"
}, {
	question: "Gdzie jest kotek?",
	icons: ["github", "twitter", "tux"],
	answer: "github"
}, {
	question: "Gdzie jest pingwin?",
	icons: ["twitter", "tux", "github"],
	answer: "tux"
}, {
	question: "Gdzie jest wróbelek?",
	icons: ["tux", "github", "twitter"],
	answer: "twitter"
}, {
	question: "Pokaż jabłko",
	icons: ["food", "apple", "bug"],
	answer: "apple"
}, {
	question: "Która strzałka wskazuje do góry?",
	icons: ["arrow-left", "arrow-up", "arrow-right"],
	answer: "arrow-up"
}, {
	question: "Która strzałka wskazuje w dół?",
	icons: ["arrow-left", "arrow-up", "arrow-down"],
	answer: "arrow-down"
}, {
	question: "Która strzałka wskazuje w lewo?",
	icons: ["arrow-left", "arrow-up", "arrow-right"],
	answer: "arrow-left"
}, {
	question: "Która strzałka wskazuje w prawo?",
	icons: ["arrow-up", "arrow-right", "arrow-left"],
	answer: "arrow-right"
}, {
	question: "Czego używamy do jedzenia?",
	icons: ["food", "cloud", "quill"],
	answer: "food"
}, {
	question: "Czego używamy do jedzenia?",
	icons: ["bell", "mug", "alarm"],
	answer: "mug"
}, {
	question: "Pokaż kieliszek?",
	icons: ["flag", "bell", "glass"],
	answer: "glass"
}, {
	question: "Gdzie znajduje się dzwonek?",
	icons: ["cart", "flag", "bell"],
	answer: "bell"
}, {
	question: "Pokaż budzik?",
	icons: ["alarm", "sad", "glass"],
	answer: "alarm"
}, {
	question: "Gdzie znajduje się wózek sklepowy?",
	icons: ["hammer", "alarm", "cart"],
	answer: "cart"
}, {
	question: "Gdzie znajduje się flaga?",
	icons: ["cart", "flag", "alarm"],
	answer: "flag"
}, {
	question: "Co lata w powietrzu?",
	icons: ["truck", "glass", "airplane"],
	answer: "airplane"
}, {
	question: "Co jeździ po drodze?",
	icons: ["truck", "glass", "airplane"],
	answer: "truck"
}, {
	question: "Pokaż młotek",
	icons: ["hammer", "aid", "bell"],
	answer: "hammer"
}, {
	question: "Pokaż pióro",
	icons: ["star2", "quill", "bell"],
	answer: "quill"
}, {
	question: "Gdzie znajduje się flaga?",
	icons: ["airplane", "flag", "alarm"],
	answer: "flag"
}, {
	question: "Która gwiazdka jest pusta?",
	icons: ["star", "star", "star2"],
	answer: "star2"
}, {
	question: "Gdzie znajduje się wózek sklepowy?",
	icons: ["hammer", "alarm", "cart"],
	answer: "cart"
}, {
	question: "Kto jest wesoły?",
	icons: ["smiley2", "sad", "sad2"],
	answer: "smiley2"
}, {
	question: "Pokaż nożyczki",
	icons: ["scissors", "cart", "leaf"],
	answer: "scissors"
}];
var icons = [{
	name: "aid",
	color: "red",
	group: "",
	difficulty: 3
}, {
	name: "airplane",
	group: "",
	difficulty: 2
}, {
	name: "alarm",
	group: "",
	difficulty: 2
}, {
	name: "bell",
	group: "",
	difficulty: 2
}, {
	name: "books",
	group: "",
	difficulty: 2
}, {
	name: "cloud",
	color: "blue",
	group: "",
	difficulty: 2
}, {
	name: "food",
	group: "",
	difficulty: 1
}, {
	name: "heart",
	color: "red",
	group: "",
	difficulty: 1
}, {
	name: "home",
	group: "",
	difficulty: 1
}, {
	name: "github",
	color: "black",
	group: "",
	difficulty: 1
}, {
	name: "key",
	group: "",
	difficulty: 1
}, {
	name: "key2",
	group: "",
	difficulty: 1
}, {
	name: "leaf",
	color: "green",
	group: "",
	difficulty: 2
}, {
	name: "lightning",
	color: "blue",
	group: "",
	difficulty: 1
}, {
	name: "scissors",
	group: "",
	difficulty: 2
}, {
	name: "smiley2",
	group: "",
	difficulty: 2
}, {
	name: "star",
	color: "yellow",
	group: "",
	difficulty: 1
}, {
	name: "twitter",
	group: "",
	difficulty: 2
}];
/*var icons2 = {
	alarm: {
		group: '',
		difficulty: 2
	}, {
		group: ''
	}
}
*/
var groups = [{
	name: "shapes"
}, {
	name: "colors"
}];
var colors = [{
	name: "black"
}, {
	name: "gray"
}, {
	name: "red"
}, {
	name: "green"
}, {
	name: "blue"
}, {
	name: "magenta"
}, {
	name: "yellow"
}, {
	name: "cyan"
}];