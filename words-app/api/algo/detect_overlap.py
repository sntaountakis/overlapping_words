import numpy as np

def detect_overlap(word: str, second_word: str) -> tuple[int, str]:
    """
    Detects maximum overlapping characters between two words
    This approach uses Dynamic Programming to detect the 
    maximum subsequence.
    
    The c array handles the dynamic counting of the longest overlap
    The b array keeps the respective overlapped string

    Parameters:
    arg1 (str): The first word
    arg2 (str): The second word

    Returns:
    tuple(int, str): the longest overlap and the overlapped substring
    """

    word_len = len(word)
    second_len = len(second_word)
    max_len = max(word_len, second_len)

    c = np.zeros((word_len+1, second_len+1), dtype=int)
    b = np.chararray((word_len+1, second_len+1), 
                    itemsize=max_len, unicode=True)
    b[:] = ''
    
    for i in range(1, c.shape[0]):
        for j in range(1, c.shape[1]):
            if word[i-1] == second_word[j-1]:
                c[i, j] = 1 + c[i-1, j-1]
                b[i,j] = b[i-1, j-1] + word[i-1]
            else:
                c[i, j] = max(c[i, j-1], c[i-1, j])
                b[i, j] = max(b[i, j-1], b[i-1, j], key=len)
    
    return int(c[-1,-1]), str(b[-1,-1])