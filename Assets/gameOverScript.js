
static var ranking = new ArrayList();
function Start () {

  Invoke("restart", 3);
}
// GUI描画
var style : GUIStyle;
function OnGUI() {
	// GUI.contentColor = Color.black;
	GUI.contentColor = Color.white;
	var n = 1;
	ranking.Sort();
	ranking.Reverse();
	for (var i = 0; i < (ranking.Count - 1); i++) {
	  if (ranking[i] == ranking[i+1]) ranking.RemoveAt(i);
	}
	// GUI.Label(Rect(320,20,300,100), "ランキング", style);
	var josu;
	for (score in ranking){
      // GUI.Label(Rect(320,330 + (n * 100),300,100), n + "位： " + score, style);
      switch (n){
      	case 1:
      		josu = "st";
      		break;
      	case 2:
      		josu = "nd";
      		break;
      	case 3:
      		josu = "rd";
      }
      // GUI.Label(Rect(Screen.width/2-150,400 + (n * 100),300,100), n + "位： " + score, style);
      GUI.Label(Rect(Screen.width/2-150,400 + (n * 100),300,100), n + josu +"： "+ score, style);
      if (n > 2) break;
      n++;
	}
}

function restart() {
  Application.LoadLevel("Jenga");
}

//終了音
var mario : AudioClip;
function marioSE(){
	audio.clip = mario;
    audio.Play();
}