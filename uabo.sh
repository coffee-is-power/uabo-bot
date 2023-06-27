#!/usr/bin/env bash
mpv --no-border --geometry=355x200+$(shuf -i 0-$(expr 1366 - 355) -n 1)+$(shuf -i 0-$(expr 768 - 200) -n 1) --no-input-default-bindings \
 ./memes/$(cat ./memes/list.txt | shuf -n 1)
