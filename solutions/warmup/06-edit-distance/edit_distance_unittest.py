from unittest import TestCase
import edit_distance_solution as ed

class TestEditDistance(TestCase):
    def testAlwaysFalse_LengthDiffGreaterThanOne(self):
        self.assertFalse(ed.OnEditApart("cat", "anycat"))
        self.assertFalse(ed.OnEditApart("", "ab"))
        self.assertFalse(ed.OnEditApart("ab", ""))

    def testAlwaysFalse(self):
        self.assertFalse(ed.OnEditApart("cat", "dog"))
        self.assertFalse(ed.OnEditApart("cat", "act"))

    def testAlwaysTrue(self):
        self.assertTrue(ed.OnEditApart("cat", "cats"))
        self.assertTrue(ed.OnEditApart("cat", "cut"))
        self.assertTrue(ed.OnEditApart("cat", "cast"))
        self.assertTrue(ed.OnEditApart("cat", "at"))

