# Arrays & Hashing — Notes

## 006 Merge Sorted Array

**My approach:** Forward iteration with swap + zero-fill.
- When `nums1[i] > nums2[j]`, swap `nums2[j]` into position and push displaced value to the padding zone.
- When `nums1[i] === 0`, fill from `nums2[j]`.
- Guard: loop exits when `j >= n` to avoid out-of-bounds.

**Alternative — Backwards iteration (standard):**
- Start: `i = m-1`, `j = n-1`, `p = m+n-1`
- Compare `nums1[i]` vs `nums2[j]`, place the larger at `nums1[p]`, decrement accordingly.
- After `j` is exhausted, remaining `nums1` elements are already in place.
- Why it's clean: writing into the unused tail means you never overwrite unprocessed data.

**Edge cases to watch:**
- `m = 0` → return `nums2` directly
- `n = 0` → return `nums1` directly
- `nums2` all smaller than `nums1` → forward approach needs careful bounds checking
- Input constraint: `nums1.length == m + n` must hold; test cases that violate this are invalid
