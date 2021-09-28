import re

from pydantic import BaseModel

SEPARATORS = ['-', ' ', '_']


def to_upper_camel_case(text: str):
    combined_separators = ''.join(SEPARATORS)
    words = re.split(f'[{combined_separators}]', text)

    result = ''
    for word in words:
        if is_upper_camel_case(word):
            result += word
        elif is_lower_camel_case(word):
            result += word[0].upper() + word[1:]
        else:
            result += word.strip(combined_separators).title()

    return result


def to_lower_camel_case(text: str):
    upper_camel_case = to_upper_camel_case(text)
    return upper_camel_case[0].lower() + upper_camel_case[1:]


def is_upper_camel_case(text: str):
    return text[0].isupper() and not any(separator in text for separator in SEPARATORS)


def is_lower_camel_case(text: str):
    return text[0].islower() and not any(separator in text for separator in SEPARATORS)


class BaseJsonModel(BaseModel):
    """
    Enables us to use snake_case naming on the models, and camel case casing for the JSON
    """

    class Config:
        alias_generator = to_lower_camel_case
        allow_population_by_field_name = True
