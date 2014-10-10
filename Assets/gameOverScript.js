
static var ranking = new ArrayList();
function Start () {

  Invoke("restart", 2.5);
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
	for (score in ranking){
      // GUI.Label(Rect(320,330 + (n * 100),300,100), n + "位： " + score, style);
      GUI.Label(Rect(Screen.width/2-150,360 + (n * 100),300,100), n + "位： " + score, style);
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