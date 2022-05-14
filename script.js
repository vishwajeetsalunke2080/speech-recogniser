
function clicked(){

    //const tts_text = document.getElementById("mytext");
    
    var key = "a009f9e83afd49899cfc542ba72d218d";
    var region = "centralindia";
    var audioFile = "YourAudioFile.wav";

    const speechConfig = SpeechConfig.fromSubscription(key, region);
    const audioConfig = AudioConfig.fromAudioFileOutput(audioFile);
    const text ="hello vishwajeet";
    // The language of the voice that speaks.
    speechConfig.speechSynthesisVoiceName = "en-US-JennyNeural"; 

    // Create the speech synthesizer.
    var synthesizer = new SpeechSynthesizer(speechConfig, audioConfig);

      synthesizer.speakTextAsync(text,
          function (result) {
        if (result.reason === ResultReason.SynthesizingAudioCompleted) {
          console.log("synthesis finished.");
        } else {
          console.error("Speech synthesis canceled, " + result.errorDetails +
              "\nDid you set the speech resource key and region values?");
        }
        synthesizer.close();
        synthesizer = null;
      },
          function (err) {
        console.trace("err - " + err);
        synthesizer.close();
        synthesizer = null;
      });
      console.log("Now synthesizing to: " + audioFile);
    
}

clicked();