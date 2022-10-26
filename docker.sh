docker run --rm -it \
    --ipc=host \
    --name "practice8" \
    -p 0.0.0.0:3000:3000 -p 0.0.0.0:8000:8000 \
    -v ${PWD}:/home \
    snuspl/swpp:practice8
