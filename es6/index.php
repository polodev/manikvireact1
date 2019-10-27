<?php

function manik($a, $b, ...$others)
{
  var_export($others);
}

manik(1, 2, 3, 4, 5, 6);