

  
  // Define the Player class
    class Jugador {
        constructor(name) {
        this.name = name;
        this.wins = 0;
        this.losses = 0;
        this.movimiento = null;
        }

        elegirMovimiento(jugada){
            this.movimiento=jugada;
        }
    }
  
    class jugada {
      constructor(movimiento){
        this.movimiento=movimiento;
      }
    }
  
  
  // Define the Roshambo game
  class Roshambo {
    constructor() {
      this.players = [];
    }
  
    addPlayer(player) {
      this.players.push(player);
    }
  
    playRound() {
      if (this.players.length !== 2) {
        console.log("Need exactly two players to play Roshambo.");
        return;
      }
  
      const [player1, player2] = this.players;
  
      if (!player1.movimiento || !player2.movimiento) {
        console.log("Both players must make a choice.");
        return;
      }
  
      if (player1.movimiento === player2.movimiento) {
        console.log("It's a tie!");
      } else if (
        (player1.movimiento === "Rock" && player2.movimiento === "Scissors") ||
        (player1.movimiento === "Scissors" && player2.movimiento === "Paper") ||
        (player1.movimiento === "Paper" && player2.movimiento === "Rock")
      ) {
        console.log(`${player1.name} wins!`);
        player1.wins++;
        player2.losses++;
      } else {
        console.log(`${player2.name} wins!`);
        player2.wins++;
        player1.losses++;
      }
  
      // Reset player choices for the next round
      player1.movimiento = null;
      player2.movimiento = null;
    }
  }
  
  // Create two players and the Roshambo game
  const player1 = new Jugador("Player 1");
  const player2 = new Jugador("Player 2");
  const roshamboGame = new Roshambo();
  
  // Add players to the game
  roshamboGame.addPlayer(player1);
  roshamboGame.addPlayer(player2);
  
  // Players make their choices
  player1.elegirMovimiento(new jugada("Rock"));
  player2.elegirMovimiento(new jugada("Scissors"));
  
  // Play a round
  roshamboGame.playRound();
  
  // Display player stats
  console.log(`${player1.name}: Wins ${player1.wins}, Losses ${player1.losses}`);
  console.log(`${player2.name}: Wins ${player2.wins}, Losses ${player2.losses}`);
  