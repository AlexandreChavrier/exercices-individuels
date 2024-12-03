<?php

function solution(int $number): int {
    $i = 0;

    while ($i < $number) {
        if ($i % 3 == 0 || $i % 5 == 0) {
            $result += $i;
        }
        $i++;
    }
    return $result;
}

echo solution(47387);