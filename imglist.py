import glob

fns = glob.glob("images/*")

with open("images.js", "w") as fp:
    fp.write("var images = [")
    fp.write(", ".join('"' + f + '"' for f in fns))
    fp.write("];\n")