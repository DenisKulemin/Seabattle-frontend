// import { css, addDiv } from "./tag-helpers.js";
// import { css, addDiv } from "./../public/javascripts/tag-helpers";
// import { JSDOM } from "jsdom";
// import fs from "fs";
// import path from "path";

// import { fileURLToPath } from "url";

var { css, addDiv, addButton } = require("./tag-helpers");

// const __filename = fileURLToPath(import.meta.url);

// const __dirname = path.dirname(__filename);

// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;

// const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

// let page = new JSDOM(html, {
//   resources: "usable",
//   runScripts: "dangerously",
// });

class Game {
  constructor() {
    // this.$app = page.window.document.querySelector("#app");
    this.$app = "";

    this.stylesStats = {
      width: "100%",
      height: "50%",
      left: "0%",
      top: "5%",
      border: "0px",
    };
    this.stylesBattleField = {
      width: "30%",
      left: "0%",
      display: "table-cell",
      border: "0px",
      padding: "1%",
    };

    this.stylesContainer = {
      left: "0%",
      width: "90.91%",
      height: "100%",
      display: "table-cell",
      border: "0px",
    };

    this.verticalCoordinateGrid = {
      width: "100%",
      height: "100%",
      left: "0%",
      "align-items": "center",
      display: "grid",
      "grid-template-rows": "repeat(10, auto)",
      gap: "0 0",
      "border-right": "0px",
    };

    this.horizontalCoordinateGrid = {
      width: "90.91%",
      height: "100%",
      left: "9.09%",
      "align-items": "center",
      display: "grid",
      "grid-template-columns": "repeat(10, auto)",
      gap: "0 0",
      "border-bottom": "0px",
    };

    this.stylesBattleFieldGrid = {
      display: "grid",
      "grid-template-columns": "repeat(10, auto)",
      "grid-template-rows": "repeat(10, auto)",
      gap: "0 0",
      width: "100%",
      height: "100%",
      left: "0%",
      "align-items": "center",
      "border-top": "0px",
      "border-left": "0px",
    };

    this.stylesBattleFieldWithCoordinates = {
      width: "100%",
      left: "0%",
      display: "table",
      border: "0px solid orange",
    };

    this.stylesBaseCells = {
      width: "100%",
      height: "100%",
      "aspect-ratio": "1 / 1",
      left: "0%",
      "white-space": "pre",
      padding: "0%",
    };

    this.stylesEmptyCells = {
      width: "100%",
      height: "100%",
      "aspect-ratio": "1 / 1",
      left: "0%",
      "white-space": "pre",
      background: "blue",
      padding: "0%",
    };

    this.stylesShipCells = {
      width: "100%",
      height: "100%",
      "aspect-ratio": "1 / 1",
      left: "0%",
      "white-space": "pre",
      background: "grey",
      padding: "0%",
    };

    this.stylesHitCells = {
      width: "100%",
      height: "100%",
      "aspect-ratio": "1 / 1",
      left: "0%",
      "white-space": "pre",
      background: "red",
      padding: "0%",
    };

    this.stylesMissCells = {
      width: "100%",
      height: "100%",
      "aspect-ratio": "1 / 1",
      left: "0%",
      "white-space": "pre",
      background: "green",
      padding: "0%",
    };

    this.stylesCells = {
      " ": this.stylesEmptyCells,
      0: this.stylesShipCells,
      X: this.stylesHitCells,
      "*": this.stylesMissCells,
    };

    this.stylesShipNumber = {
      width: "50%",
      height: "100%",
      left: "0%",
      display: "table-cell",
      border: "0px",
      "text-align": "right",
      "white-space": "pre",
    };
    this.stylesShip = {
      left: "50%",
      width: "50%",
      height: "20%",
      display: "table-cell",
      border: "0px",
    };
    this.stylesShipLine = {
      width: "100%",
      height: "100%",
      left: "0%",
      "align-items": "center",
      display: "grid",
      "grid-template-columns": "repeat(1, auto)",
      gap: "0 0",
    };
    this.stylesShipStats = {
      left: "0%",
      width: "75%",
      height: "15%",
      "margin-top": "5%",
      display: "inline-table",
      border: "0px",
    };
    this.isNewGame = false;
    this.isGameStarts = false;
    this.BattleFieldCells = {
      "1 1": " ",
      "1 2": " ",
      "1 3": " ",
      "1 4": " ",
      "1 5": " ",
      "1 6": "0",
      "1 7": " ",
      "1 8": " ",
      "1 9": " ",
      "1 10": " ",
      "2 1": " ",
      "2 2": " ",
      "2 3": " ",
      "2 4": " ",
      "2 5": " ",
      "2 6": "0",
      "2 7": " ",
      "2 8": " ",
      "2 9": " ",
      "2 10": " ",
      "3 1": "X",
      "3 2": " ",
      "3 3": " ",
      "3 4": " ",
      "3 5": " ",
      "3 6": "0",
      "3 7": " ",
      "3 8": " ",
      "3 9": " ",
      "3 10": " ",
      "4 1": " ",
      "4 2": " ",
      "4 3": " ",
      "4 4": " ",
      "4 5": " ",
      "4 6": " ",
      "4 7": " ",
      "4 8": "0",
      "4 9": " ",
      "4 10": " ",
      "5 1": " ",
      "5 2": " ",
      "5 3": " ",
      "5 4": " ",
      "5 5": " ",
      "5 6": "0",
      "5 7": " ",
      "5 8": " ",
      "5 9": " ",
      "5 10": " ",
      "6 1": " ",
      "6 2": " ",
      "6 3": " ",
      "6 4": " ",
      "6 5": " ",
      "6 6": "*",
      "6 7": " ",
      "6 8": " ",
      "6 9": " ",
      "6 10": " ",
      "7 1": " ",
      "7 2": " ",
      "7 3": " ",
      "7 4": " ",
      "7 5": " ",
      "7 6": " ",
      "7 7": " ",
      "7 8": " ",
      "7 9": "*",
      "7 10": " ",
      "8 1": " ",
      "8 2": " ",
      "8 3": " ",
      "8 4": " ",
      "8 5": " ",
      "8 6": "*",
      "8 7": " ",
      "8 8": " ",
      "8 9": " ",
      "8 10": " ",
      "9 1": " ",
      "9 2": " ",
      "9 3": " ",
      "9 4": " ",
      "9 5": " ",
      "9 6": "0",
      "9 7": " ",
      "9 8": " ",
      "9 9": " ",
      "9 10": " ",
      "10 1": " ",
      "10 2": " ",
      "10 3": " ",
      "10 4": " ",
      "10 5": " ",
      "10 6": "0",
      "10 7": " ",
      "10 8": " ",
      "10 9": " ",
      "10 10": " ",
    };
    this.tmpShipCoordinates = [];
  }

  renderCell(value, key = "", isNeedButtons = false) {
    return isNeedButtons == true && [" ", ""].includes(value)
      ? addButton(
          value in this.stylesCells ? " " : value,
          "/",
          "coordinate",
          key,
          css(this.stylesCells[value] ?? this.stylesBaseCells)
        )
      : addDiv(
          `${" ".repeat(2 - value.toString().length)}${
            value in this.stylesCells ? " " : value
          }`,
          css(this.stylesCells[value] ?? this.stylesBaseCells)
        );
  }

  renderGrid(obj, isNeedButtons, styles = {}) {
    if (Array.isArray(obj)) {
      return addDiv(
        Object.values(obj)
          .map((item) => item)
          .map((value) => this.renderCell(value))
          .join(""),
        css(styles)
      );
    } else {
      return addDiv(
        Object.keys(obj)
          .map((item) => item)
          .map((key) => this.renderCell(obj[key], key, isNeedButtons))
          .join(""),
        css(styles)
      );
    }
  }

  renderBattleField(BattleFieldCells, isNeedButtons) {
    return addDiv(
      `${this.renderGrid(
        BattleFieldCells,
        isNeedButtons,
        this.stylesBattleFieldGrid
      )}`,
      css(this.stylesContainer)
    );
  }

  renderBattleFieldWithCoordinates(BattleFieldCells, isNeedButtons) {
    let xCoordinateLine = this.renderGrid(
      Array.from({ length: 10 }, (x, i) => i + 1),
      false,
      this.horizontalCoordinateGrid
    );
    let battleFieldWithYCoordinateLine = `${this.renderGrid(
      "abcdefghij".split(""),
      false,
      this.verticalCoordinateGrid
    )}${this.renderBattleField(BattleFieldCells, isNeedButtons)}`;

    return `${xCoordinateLine}${addDiv(
      `${battleFieldWithYCoordinateLine}`,
      css(this.stylesBattleFieldWithCoordinates)
    )}`;
  }

  renderShipStats(shipDict = {}) {
    this.stylesShipLine["grid-template-columns"] = "repeat(1, auto)";
    this.stylesShipNumber["width"] = "84.375%";
    let patrolBoat = `${this.renderGrid(
      Array.from({ length: 1 }, (x, i) => 0),
      false,
      this.stylesShipLine
    )}${addDiv(shipDict["patrolBoat"] ?? 4, css(this.stylesShipNumber))}`;
    this.stylesShipLine["grid-template-columns"] = "repeat(2, auto)";
    this.stylesShipNumber["width"] = "68.75%";
    let submarine = `${this.renderGrid(
      Array.from({ length: 2 }, (x, i) => 0),
      false,
      this.stylesShipLine
    )}${addDiv(shipDict["submarine"] ?? 3, css(this.stylesShipNumber))}`;
    this.stylesShipLine["grid-template-columns"] = "repeat(3, auto)";
    this.stylesShipNumber["width"] = "53.125%";
    let destroyer = `${this.renderGrid(
      Array.from({ length: 3 }, (x, i) => 0),
      false,
      this.stylesShipLine
    )}${addDiv(shipDict["destroyer"] ?? 2, css(this.stylesShipNumber))}`;
    this.stylesShipLine["grid-template-columns"] = "repeat(4, auto)";
    this.stylesShipNumber["width"] = "37.5%";
    let battleship = `${this.renderGrid(
      Array.from({ length: 4 }, (x, i) => 0),
      false,
      this.stylesShipLine
    )}${addDiv(shipDict["battleship"] ?? 1, css(this.stylesShipNumber))}`;

    return `
    ${addDiv(patrolBoat, css(this.stylesShipStats))}
    ${addDiv(submarine, css(this.stylesShipStats))}
    ${addDiv(destroyer, css(this.stylesShipStats))}
    ${addDiv(battleship, css(this.stylesShipStats))}
      `;
  }

  renderGamePage(isNeedButtons) {
    let shipDict = {
      patrolBoat: 4,
      submarine: 3,
      destroyer: 2,
      battleship: 1,
    };

    this.$app = "";
    let setShipButton =
      isNeedButtons == true
        ? addButton("Set ship", "/", "setShip", "true")
        : "";

    this.$app += addDiv(
      `${setShipButton}<p>player ships</p>${this.renderShipStats(shipDict)}`,
      css(this.stylesStats)
    );

    this.$app += addDiv(
      `<p>player</p>${this.renderBattleFieldWithCoordinates(
        this.BattleFieldCells,
        isNeedButtons
      )}`,
      css(this.stylesBattleField)
    );

    this.$app += addDiv(
      `<p>enemy</p>${this.renderBattleFieldWithCoordinates(
        this.BattleFieldCells,
        !isNeedButtons
      )}`,
      css(this.stylesBattleField)
    );

    this.$app += addDiv(
      `<p>enemy ships</p>${this.renderShipStats(shipDict)}`,
      css(this.stylesStats)
    );
    return (
      addDiv(this.$app, css({ margin: "5% 0% 5% 0%" })) +
      addButton("End game", "/", "endGame", "true")
    );
  }

  renderStartPage() {
    return (
      addButton("New game", "/", "newGame", "true") +
      addDiv("", css({ margin: "5%", border: "0px" })) +
      addButton("End game", "/", "endGame", "true")
    );
  }

  renderPreparationPage() {
    return (
      addButton("Start game", "/", "game", "true") + this.renderGamePage(true)
    );
  }

  render() {
    let content = `<form method="post" id="myForm"></form>`;
    if (this.isNewGame == false) {
      return content + this.renderStartPage();
    } else if (this.isGameStarts == false) {
      return content + this.renderPreparationPage();
    } else {
      return content + this.renderGamePage(false);
    }
  }

  addShipCoordinate(coordinate) {
    console.log(this.tmpShipCoordinates.includes(coordinate));
    if (this.tmpShipCoordinates.includes(coordinate)) {
      this.tmpShipCoordinates.splice(
        this.tmpShipCoordinates.indexOf(coordinate),
        1
      );
      this.BattleFieldCells[coordinate] = " ";
    } else {
      this.tmpShipCoordinates.push(coordinate);
      this.BattleFieldCells[coordinate] = "";
    }
    console.log(coordinate, this.tmpShipCoordinates);
  }

  setShipCoordinates() {
    this.tmpShipCoordinates.forEach((coordinate) => {
      this.BattleFieldCells[coordinate] = 0;
    });
    this.tmpShipCoordinates = [];
  }

  shoot(coordinate) {
    this.BattleFieldCells[coordinate] = "*";
  }
}

let myGame = new Game();

module.exports = {
  myGame,
};
