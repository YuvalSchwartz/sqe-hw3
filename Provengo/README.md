# Testing Moodle using Provengo
This directory contains the Provengo project for testing Moodle.


## Running the tests
To run a single random test, run:
```shell 
provengo run moodleProvengo
```

See the [Provengo README](moodleProvengo/README.md) for more useful commands.

## API
See [Provengo README](moodleProvengo/README.md) for a short description of the API.
For a full documentation go to [https://docs.provengo.tech](https://docs.provengo.tech)

## How we tested:
1. We started by creating the [story files](moodleProvengo/spec/js/Moodle.story.js).
2. We then ran the following command to generate the test model:
```shell
provengo analyze -f PDF moodleProvengo   
```
3. We repeated steps 1-2 until we were satisfied with the generated model.
4. We added [Event definitions](moodleProvengo/spec/js/Moodle.EventDef.js) to define how the stories actuate the website using Selenium.
5. We used the following command to run the tests:
```shell
provengo run --show-sessions moodleProvengo
```
6. We repeated steps 4-5 until we were satisfied with the result.
7. We recorded a video of the running tests and added it to the report. Since more than one browser session was opened, we recorded the entire screen. The link for the video is [here](https://drive.google.com/file/d/1D4uv7J0gm6kod2UKNn6TDTdMSFrvIB0f/view?pli=1). **Notice the timer in the video to see the bug!**
8. We copied the generated graph of the model to a file named [model.pdf](model.pdf).

### Story files
The test stories are in [Tests.story.js](moodleProvengo/spec/js/Moodle.story.js). See the file for a detailed description of the stories.


### Events definition files
The specification for the events are given in [EventDef.js](moodleProvengo/spec/js/Moodle.EventDef.js). See the file for a detailed description of the events.