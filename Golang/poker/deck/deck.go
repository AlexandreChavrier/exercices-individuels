package deck

import (
	"math/rand"
)

type Deck struct {
	Cards []string
}

func NewDeck() *Deck {
	var cards []string
	cardsValue := []string{"1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"}
	cardsColor := []string{"\u2665", "\u2666", "\u2663", "\u2660"}

	for _, value := range cardsValue {
		for _, color := range cardsColor {
			cards = append(cards, value+color)
		}
	}
	return &Deck{Cards: cards}
}

func (d *Deck) Shuffle() {
	for i := range d.Cards {
		j := rand.Intn(i + 1)
		d.Cards[i], d.Cards[j] = d.Cards[j], d.Cards[i]
	}
}

func (d *Deck) Deal(numCards int) []string {
	if numCards > len(d.Cards) {
		numCards = len(d.Cards)
	}
	dealedCards := d.Cards[:numCards]
	d.Cards = d.Cards[numCards:]

	return dealedCards
}
