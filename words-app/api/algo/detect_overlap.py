import numpy as np

def detect_overlap(word: str, second_word: str) -> tuple[int, str]:
    """
    Detects maximum overlapping characters between two words
    This approach uses Dynamic Programming to detect the 
    maximum subsequence.

    Parameters:
    arg1 (str): The first word
    arg2 (str): The second word

    Returns:
    tuple(int, str): the longest overlap and the overlapped substring
    """

    word_len = len(word)
    second_len = len(second_word)
    max_len = max(word_len, second_len)

    # Array that will hold the maximum subsequence of overlapping characters
    np_overlap = np.chararray((word_len+1, second_len+1), 
                    itemsize=max_len, unicode=True)
    np_overlap[:] = ''
    
    for i in range(1, np_overlap.shape[0]):
        for j in range(1, np_overlap.shape[1]):
            if word[i-1] == second_word[j-1]:
                np_overlap[i,j] = np_overlap[i-1, j-1] + word[i-1]
            else:
                np_overlap[i, j] = max(np_overlap[i, j-1], np_overlap[i-1, j], key=len)
    
    out = str(np_overlap[-1, -1])
    
    return len(out), out