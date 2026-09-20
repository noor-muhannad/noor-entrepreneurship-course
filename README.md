# Entrepreneurship Fundamentals | أساسيات ريادة الأعمال

Free Arabic course (with English terminology) by Noor Muhannad Ahmed: 12 lectures, a PDF study sheet per lecture, and a capstone project.

Live site: https://noor-muhannad.github.io/noor-entrepreneurship-course/

## Adding or editing content
1. Edit `docs/data/lectures/L01.json` ... `L12.json` (or add `L13.json`, and a part in `docs/data/meta.json`).
2. Run `python3 build.py` (needs `playwright` with Chromium) to regenerate `docs/data/course.js` and the PDFs in `docs/pdf/`. Use `--no-pdf` to skip the PDFs.
3. Commit and push. GitHub Pages serves the `docs/` folder.

## Attribution
Parts of the content are adapted and paraphrased from MIT OpenCourseWare 15.390 "New Enterprises" and 15.393 (CC BY-NC-SA 4.0). Non-commercial use; derivative material is shared under the same licence. Links to MITx, edX and Coursera lead to the original platforms.
