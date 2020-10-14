def OnEditApart(s1, s2):
    if abs(len(s1) - len(s2)) > 1:
        return False

    if s1 in s2 or s2 in s1:
        return True

    mismatch = 0
    for i in range(len(s1)):
        if s1[i]!=s2[i]:
            mismatch+=1

        if mismatch > 1:
            return False 

    return True
