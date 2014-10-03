#pragma strict

function Start () {
	StartSE();
}

function Update () {

}

//var finalPoint : int = 0;
var pointFlag : boolean = true;

var green : int = 0;
var greens = ['Cube1-1', 'Cube4-1', 'Cube8-1'];

var red : int = 1;
var reds = ['Cube1-2', 'Cube3-3', 'Cube4-3', 'Cube7-1', 'Cube9-2', 'Cube12-3', 'Cube13-2'];

var blue : int = 2;
var blues = ['Cube2-2', 'Cube5-1', 'Cube8-3', 'Cube13-1'];

var yellow : int = 3;
var yellows = ['Cube1-3', 'Cube5-3', 'Cube6-2', 'Cube8-2', 'Cube10-2', 'Cube12-2', 'Cube13-3'];

var normal : int = 4;
var normals = ['Cube2-1', 'Cube3-1', 'Cube3-2', 'Cube4-2', 'Cube5-2', 'Cube6-1', 'Cube6-3', 'Cube9-1', 'Cube9-3', 'Cube10-3', 'Cube11-2', 'Cube11-3', 'Cube12-1'];

var gold : int = 5;
var golds = ['Cube2-3', 'Cube7-2', 'Cube11-1'];

var black : int = 6;
var blacks = ['Cube7-3', 'Cube10-1'];
var cubeName = '';
var ary;
Colo.color = 'normal';
ary = normals;

//開始音
var start : AudioClip;
function StartSE(){
	audio.clip = start;
    audio.Play();
}

//終了音
var end : AudioClip;
function EndSE(){
	audio.clip = end;
    audio.Play();
}

//終了音2
var pyun : AudioClip;
function PyunSE(){
	audio.clip = pyun;
    audio.Play();
}

//落下音
var drop : AudioClip;
function DropSE(){
	audio.clip = drop;
    audio.Play();
}

//次のターゲット音
var piron : AudioClip;
function PironSE(){
	audio.clip = piron;
    audio.Play();
}

function Sleep(){
	Debug.Log("Sleep now");
}

//end judge
function OnCollisionEnter(obj:Collision){
if (obj.gameObject.name == "Cube13-1" || obj.gameObject.name == "Cube13-2" || obj.gameObject.name == "Cube13-3"){
	transform.position.y = 2;
	Invoke("Sleep",1);
	// EndSE();

	}else{
		DropSE();
	}

//例外設定-下段-
  if (obj.gameObject.name == "Cube1-1" || obj.gameObject.name == "Cube1-2" || obj.gameObject.name == "Cube1-3"){
  } else {
    if (cubeName != obj.gameObject.name) {
    cubeName = obj.gameObject.name;
    //Debug.Log(obj.gameObject.name);
    if (! checkColor(obj.gameObject.name, ary)){
      //finalPoint = point;
      //Debug.Log(finalPoint);
      pointFlag = false;
      Colo.color = '';
      transform.position.y = 2;
    }

    // select next color
    if (pointFlag != true) {
  } else {

  PironSE();

  var n = rand();
  switch (n)
    {
    case 4:
        Colo.color = 'gold';
        ary = golds;
        break;
    case 3:
        Colo.color = 'yellow';
        ary = yellows;
        break;
    case 2:
        Colo.color = 'blue';
        ary = blues;
        break;
    case 1:
        Colo.color = 'red';
        ary = reds;
        break;
    case 0:
        Colo.color = 'green';
        ary = greens;
        break;
    default:
        Colo.color = 'normal';
        ary = normals;
        break;
    }

    }

    addPoint(getColor(obj.gameObject.name));
    //showColor(Colo.color);
    //transform.position.y = 2;
  }
  }

  // gameover if top-blocks fall
  // if (obj.gameObject.name == "Cube13-1" || obj.gameObject.name == "Cube13-2" || obj.gameObject.name == "Cube13-3"){
  //   transform.position.y = 1;
  // }
}

function rand() {
  return Random.Range(0, 12);
}

var style : GUIStyle;
function showColor (color) {
  Debug.Log(color);
}

function checkColor(name, array) {
  for(n in array)
    {
        if (name == n) {
          return true;
        }
    }
  return false;
}

function getColor(name) {
  if (checkColor(name, reds)) return 'red';
  if (checkColor(name, blues)) return 'blue';
  if (checkColor(name, yellows)) return 'yellow';
  if (checkColor(name, greens)) return 'green';
  if (checkColor(name, golds)) return 'gold';
  if (checkColor(name, normals)) return 'normal';
}

function addPoint(color) {
  //Debug.Log(pointFlag);
  if (pointFlag != true) {
  } else {
  switch (color)
    {
    case 'red':
        Score.point += 40;
        break;
    case 'blue':
        Score.point += 30;
        break;
    case 'yellow':
        Score.point += 50;
        break;
    case 'green':
        Score.point += 20;
        break;
    case 'gold':
        Score.point += 200;
        break;
    case 'normal':
        Score.point += 10;
        break;
    }
    //Debug.Log('point:' + point);
    //GameObject.Score.text = 'scorehoge';
    //.findChild('Score').text = "Score : " + point;
    //onGUI('point: ' + point);

  }
}