import pytest
from typing import List

from cute_cats_terminal._cats import CATS
from cute_cats_terminal._print import print_one, print_random, print_emoji
from cute_cats_terminal._emojis import EMOJI_DICT


@pytest.fixture()
def indexes() -> List[int]:
    return [0, 3, 2, 1, 4]


def test_print_one(indexes: List[int]):
    for i in indexes:
        cat = print_one(cat_number=i)  # type: ignore
        assert cat == CATS[i]
    with pytest.raises(ValueError):
        print_one(cat_number=0, color="car")  # type: ignore
    with pytest.raises(IndexError):
        print_one(cat_number=12, color="blue")  # type: ignore


def test_print_random(indexes: List[int]):
    for _ in indexes:
        idx, cat = print_random()
        assert cat == CATS[idx]
    with pytest.raises(ValueError):
        print_random(color="car")  # type: ignore


def test_print_emoji():
    for key in EMOJI_DICT:
        cat = print_emoji(description=key)  # type: ignore
        assert cat == EMOJI_DICT[key]
    with pytest.raises(ValueError):
        print_emoji(description="blushing cat", color="car")  # type: ignore
    with pytest.raises(KeyError):
        print_emoji(description="blushing car", color="blue")  # type: ignore
