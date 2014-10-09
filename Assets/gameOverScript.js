
static var ranking = new ArrayList();
function Start () {
	// Invoke("marioSE", 2);
	// marioSE();
  Invoke("restart", 2.5);
}
// GUI描画
var style : GUIStyle;
function OnGUI() {
	GUI.contentColor = Color.black;
	var n = 1;
	ranking.Sort();
	ranking.Reverse();
	for (var i = 0; i < (ranking.Count - 1); i++) {
	  if (ranking[i] == ranking[i+1]) ranking.RemoveAt(i);	
	}
	GUI.Label(Rect(320,20,300,100), "ランキング", style);
	for (score in ranking){
      GUI.Label(Rect(320,30 + (n * 100),300,100), n + "位： " + score, style);
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