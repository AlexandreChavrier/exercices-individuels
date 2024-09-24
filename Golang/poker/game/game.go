package game

import (
	"poker/deck"
	"poker/player"
)

type Game struct {
	Deck      *deck.Deck
	Players   []*player.Player
	FlopCards []string
}

func NewGame(deck *deck.Deck, players []*player.Player) *Game {
	return &Game{
		Deck:    deck,
		Players: players,
	}
}

func (g *Game) DealCards() {
	for _, p := range g.Players {
		p.Hand = g.Deck.Deal(2)
	}
}

func (g *Game) Flop() {
	g.FlopCards = g.Deck.Deal(5)
}
