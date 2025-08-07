import random
import termcolor
from typing import Literal, Optional, Tuple

from ._cats import CATS
from ._emojis import EMOJI_DICT

COLORS = [
    "black",
    "red",
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "white",
    "light_grey",
    "dark_grey",
    "light_red",
    "light_green",
    "light_yellow",
    "light_blue",
    "light_magenta",
    "light_cyan",
]

EMOJIS_DES = list(EMOJI_DICT.keys())


def print_one(
    cat_number: Literal[0, 1, 2, 3, 4, 5],
    color: Optional[
        Literal[
            "black",
            "red",
            "green",
            "yellow",
            "blue",
            "magenta",
            "cyan",
            "white",
            "light_grey",
            "dark_grey",
            "light_red",
            "light_green",
            "light_yellow",
            "light_blue",
            "light_magenta",
            "light_cyan",
        ]
    ] = None,
) -> str:
    if not color:
        termcolor.cprint(CATS[cat_number], color="white", attrs=["bold"])
    else:
        if color not in COLORS:
            raise ValueError(
                f"Color {color} is not allowed, allowed colors are only:\n- "
                + "\n- ".join(COLORS)
            )
        termcolor.cprint(CATS[cat_number], color=color, attrs=["bold"])
    return CATS[cat_number]


def print_random(
    color: Optional[
        Literal[
            "black",
            "red",
            "green",
            "yellow",
            "blue",
            "magenta",
            "cyan",
            "white",
            "light_grey",
            "dark_grey",
            "light_red",
            "light_green",
            "light_yellow",
            "light_blue",
            "light_magenta",
            "light_cyan",
        ]
    ] = None
) -> Tuple[int, str]:
    n = random.randint(0, len(CATS) - 1)
    if not color:
        termcolor.cprint(CATS[n], color="white", attrs=["bold"])
    else:
        if color not in COLORS:
            raise ValueError(
                f"Color {color} is not allowed, allowed colors are only:\n- "
                + "\n- ".join(COLORS)
            )
        termcolor.cprint(CATS[n], color=color, attrs=["bold"])
    return n, CATS[n]


def print_emoji(
    description: Literal[
        "playful cat", "waving cat", "sleepy cat", "shy cat", "blushing cat"
    ],
    color: Optional[
        Literal[
            "black",
            "red",
            "green",
            "yellow",
            "blue",
            "magenta",
            "cyan",
            "white",
            "light_grey",
            "dark_grey",
            "light_red",
            "light_green",
            "light_yellow",
            "light_blue",
            "light_magenta",
            "light_cyan",
        ]
    ] = None,
) -> str:
    if description not in EMOJIS_DES:
        raise KeyError("'" + description + "' is not among the available emojis")
    if not color:
        termcolor.cprint(EMOJI_DICT[description], color="white", attrs=["bold"])
    else:
        if color not in COLORS:
            raise ValueError(
                f"Color {color} is not allowed, allowed colors are only:\n- "
                + "\n- ".join(COLORS)
            )
        termcolor.cprint(EMOJI_DICT[description], color=color, attrs=["bold"])
    return EMOJI_DICT[description]
