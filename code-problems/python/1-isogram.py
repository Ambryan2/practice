# Write a function to determine if a word is an isogram
# an isogram is a word that doesn't have repeating letters
# in this instance spaces and - don't count

example = "tomato"
example2 = "help"

def is_isogram(string):
    letters = []
    string = string.lower()

    for letter in string:
        if letter not in letters:
            letters.append(letter)
        elif letter == ' ' or letter == '-':
            pass
        else:
            return False
    
    return True

print(is_isogram(example2))