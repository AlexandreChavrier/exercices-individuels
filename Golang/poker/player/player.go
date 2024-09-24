package player

type Player struct {
	Name string
	Hand []string
}

// NewPlayer crée un nouveau joueur
func NewPlayer(name string) *Player {
	return &Player{
		Name: name,
		Hand: []string{},
	}
}
