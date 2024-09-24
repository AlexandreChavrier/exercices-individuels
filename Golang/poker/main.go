package main

import (
	"fmt"
	"poker/deck"
	"poker/game"
	"poker/player"
)

func main() {
	// Crée le jeu de poker
	pokerDeck := deck.NewDeck()
	pokerDeck.Shuffle()

	// Crée deux joueurs
	playerOne := player.NewPlayer("Joueur 1")
	playerTwo := player.NewPlayer("Joueur 2")

	// Initialise le jeu
	pokerGame := game.NewGame(pokerDeck, []*player.Player{playerOne, playerTwo})

	// Distribue les cartes
	pokerGame.DealCards()

	// Flop
	pokerGame.Flop()

	// Affiche les cartes des joueurs et du flop
	fmt.Printf("Cartes du joueur 1 : %v\n", playerOne.Hand)
	fmt.Printf("Cartes du joueur 2 : %v\n", playerTwo.Hand)
	fmt.Printf("Cartes du flop : %v\n", pokerGame.FlopCards)
}

// package main

// import (
// 	"fmt"
// 	"math/rand"
// )

// func createDeck() []string {
// 	var myDeck []string
// 	cardsValue := []string{"1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"}
// 	cardsColor := []string{"\u2665", "\u2666", "\u2663", "\u2660"}

// 	for _, value := range cardsValue {
// 		for _, color := range cardsColor {
// 			myDeck = append(myDeck, value+color)
// 		}
// 	}
// 	return myDeck
// }

// func shuffleDeck(newDeck []string) []string {
// 	for i := range newDeck {
// 		j := rand.Intn(i + 1)
// 		newDeck[i], newDeck[j] = newDeck[j], newDeck[i]
// 	}
// 	return newDeck
// }

// func deal(numCards int, deck *[]string) []string {
// 	if numCards > len(*deck) {
// 		numCards = len(*deck)
// 	}

// 	dealedCards := (*deck)[:numCards]
// 	*deck = (*deck)[numCards:]

// 	return dealedCards
// }

// func flop(deck *[]string) []string {

// 	flopCards := deal(5, deck)
// 	*deck = (*deck)[3:]

// 	return flopCards
// }

// func main() {
// 	orderDeck := createDeck()
// 	pokerDeck := shuffleDeck(orderDeck)
// 	cardsPalyerOne := deal(2, &pokerDeck)
// 	cardsPlayerTwo := deal(2, &pokerDeck)
// 	flopCards := flop(&pokerDeck)

// 	fmt.Printf("Cartes du joueur 1 : %v\nCartes du joueur 2 : %v\nCartes du flop : %v", cardsPalyerOne, cardsPlayerTwo, flopCards)
// }
