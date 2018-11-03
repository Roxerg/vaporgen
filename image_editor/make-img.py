# coding: utf8
from PIL import Image, ImageFilter, ImageEnhance, ImageDraw, ImageFont
import random
import os





def makeimg(path):
    im = Image.open("img/"+path)
    #im.show()

    # split the image into individual bands
    im.convert('RGBA')
    source = im.split()

    R, G, B = 0, 1, 2

    mask1 = random.randint(100, 200)
    mask2 = random.randint(160, 220)
    mask3 = random.randint(50, 160)

    # select regions where red is less than 100
    maskRed = source[R].point(lambda i: i < mask1 and 255) #100
    maskBlue = source[B].point(lambda i: i > mask2 and 255) #160
    maskBlue2 = source[B].point(lambda i: i < mask3 and 255) #150

    # process the green band
    out1 = source[random.choice([R, G, B])].point(lambda i: i * 0.7)
    out2 = source[random.choice([R, G, B])].point(lambda i: i * 0.3)
    out3 = source[random.choice([R, G, B])].point(lambda i: i * 0.4)
    # paste the processed band back, but only where red was < 100
    source[G].paste(out1, None, maskRed)
    source[G].paste(out2, None, maskBlue)
    source[R].paste(out3, None, maskBlue2)

    # build a new multiband image
    im = Image.merge(im.mode, source)

    #enh = ImageEnhance.Contrast(im)

    #enh.enhance(1.7).show("30% more contrast")

    #

    width, height = im.size

    chars = u"汉语名诗为焦卿妻又叔用于外国语的音爸阿鼻梵语音译名意译为无间即痛苦无有间断之意为佛教八大地狱中最下最苦之处阿波罗计划美国的项科学技术计划包括把人送上月球并安全返回地球阿昌族居住在云南省西南部"
    charlist = []
    for c in chars:
        charlist.append(c)

    fills = [(255, 255, 255), (0, 255, 255)]
    fonts = ['font.ttf']

    kay = random.randint(3, 5)
    phrase = ''.join(random.sample(population=charlist, k=kay))
    fnt = ImageFont.truetype(random.choice(fonts), width/7)


    """
    if (random.randint(0, 5) > 3):
        foreground = Image.open("helper-img/"+random.choice(["bust2.png"]))
        foreground.convert('RGBA')

        w, h = foreground.size

        im.paste(foreground, (0, 0), foreground)

    """ 
    d = ImageDraw.Draw(im)
    d.text(((width)/5, (height)/3), phrase, font=fnt, fill=random.choice(fills))



    for i in range(0, random.randint(2, 9)):
        if (height < width):
            wi = width 
            hi = height
        else:
            wi = height
            hi = width
        print("aaagh")
        wi = wi/random.randint(3, 5)
        hi = hi/random.randint(3, 5)

        rect = (random.randint(0, width/2), random.randint(0, height/2), wi, hi)
        gli = im.crop(rect)
        for i in range(1, random.randint(2, 7)):
            gli = gli.filter(ImageFilter.SHARPEN)
        im.paste(gli, (random.randint(0, width), random.randint(0, height)))





    enh = ImageEnhance.Contrast(im)
    enh.enhance(1+0.1*random.randint(1, 9))

    #im = im.filter(ImageFilter.CONTOUR)

    im.show()



    im.save("edited/"+"".join(random.sample(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], random.randint(1, 5)))+".png", "PNG")


if __name__ == "__main__":
    makeimg(random.choice(os.listdir("img")))