package main

import (
	"fmt"
	"strings"
)

// function that prints spaces with the number of tree levels as parameters
func printSpaces(num int) string {
	return strings.Repeat(" ", num)
}

// function that prints tree branches with the number of tree levels as parameters
func printBranches(num int) string {
	star := strings.Repeat("*", num)
	branches := "/" + star + "\\"
	return branches
}

// function that prints the trunk
func printTrunk(spaces, trunkWidth, trunkHeight int) string {
	trunk := ""
	for i := 0; i < trunkHeight; i++ {
		trunk += printSpaces(spaces+1) + strings.Repeat("#", trunkWidth) + "\n"
	}
	return trunk
}

// function that returns all the structure of the tree with the number of tree levels as parameters.
// the structure consists of the star at the top of the tree, the branches and the trunk
func strucSapin(num int) string {
	sapin := make([]string, num)
	spaces := num
	j := 1
	alternate := 0
	sapinStar := printSpaces(spaces+1) + "+" + "\n"

	for i := 0; i < num; i++ {
		if i > 0 && i%3 == 0 {
			sapin[i] = sapin[i-1]
			alternate++
			if alternate > 0 && alternate%2 == 0 {
				sapin[i] = sapin[i-2]
				j = j - 2
				spaces++
			}
		} else {
			sapin[i] = printSpaces(spaces) + printBranches(j) + "\n"
			spaces--
			j += 2
		}
	}

	// calculation of trunk width and height proportionaly to the width and height of the tree
	trunkHeight := (num + 1) / 3
	trunkWidth := trunkHeight
	trunkSpaces := num - trunkWidth/2

	trunk := printTrunk(trunkSpaces, trunkWidth, trunkHeight)
	result := sapinStar + strings.Join(sapin, "") + trunk
	return result
}

func main() {
	sapin := strucSapin(5)
	fmt.Println(sapin)
}
