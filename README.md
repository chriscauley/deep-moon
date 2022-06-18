# Deep Moon

I tried to download a (200 MB image of the moon's geography)[https://sadr-en.nssdc.ac.cn/detail?dataSetId=972277454573928448&dataSetType=personal] and it crashed my laptop. This repo is just me wrapping that in open seadragon. I'll add a link to the live site here once I get permission from the autors.

## Instructiosn

To run this yourself, first download the image from the link above. Move it from your downloads folder to client/public/media (I also snake-cased the filename because I'm a programmer, sorry)

```
mv "~/Downloads/The geologic map of the Moon at 1-2.5M scale (pre-proof).jpg" client/public/media/the-geologic-map-of-the-moon-at-1-25m-scale-pre-proof.jpg
```

Next go to the server directory, install deepzoom and create a dzi from the jpg. This should take a minute or two

```
# create a virtual env
cd server
python3 -m venv .venv
source .venv/bin/activate

# install deepzoom
git clone https://github.com/openzoom/deepzoom.py.git
cd deepzoom.py
python setup.py install
cd ..

# convert the jpg to dzi
python dzi.py ../client/public/media/the-geologic-map-of-the-moon-at-1-25m-scale-pre-proof.jpg

# go back to project root for next step
cd ..
```

Next install the node packages and start the client

```
cd client
npm install
npm run serve
```

You should now see the project at http://localhost:8080/