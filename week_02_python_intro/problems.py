def reverse_string(s):
    res = ""
    for char in s:
        res = char + res
    return res

print(reverse_string("boo"))


def find_max(lst):
    result_num = lst[0]

    for num in lst:
        if num > result_num:
            result_num = num
    
    return result_num

print(find_max([0, 2, 4, 2]))


def is_palindrome(word):
    temp_str = word 
    for char in word:
        curr_char = temp_str[len(temp_str) - 1]
        temp_str = temp_str[:-1]
        if char != curr_char:
            return False

    return True

print(is_palindrome("racecar"))
print(is_palindrome("treat"))