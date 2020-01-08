<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Videogame</title>
<link rel="stylesheet" href="style.css">

</head>
<body>
<div class="logo" >
	<img src= "lib/logo.png" 
        alt = "Ninjago Logo" />
</div>
<% 
out.println("Hej " + request.getParameter("playername")+", vilken ninja saknas?");
String user = request.getParameter("playername");
%>

<form action="highscore.jsp" style="text-align:center">
<input type="hidden" name="playername" value="<%=user%>">
<input type="hidden" id="hidden_correctAnswer" name="correctAnswer" value="">
<input type="hidden" id="hidden_userAnswer" name="userAnswer" value="">
<input type="submit" id="submit" value="Visa Resultat" style="display:none">
</form>

<div id="11" class="ninja"></div>
<div id="22" class="ninja"></div>
<div id="33" class="ninja"></div>
<div id="44" class="ninja"></div>
<div id="55" class="ninja"></div>
<br>
<button id="1" class="answer"><img src= "lib/Jay.png" alt = "Jay" /></button>
<button id="2" class="answer"><img src= "lib/Kai.png" alt = "Kai" /></button>
<button id="3" class="answer"><img src= "lib/Zane.png" alt = "Zane" /></button>
<button id="4" class="answer"><img src= "lib/Cole.png" alt = "Cole" /></button>
<button id="5" class="answer"><img src= "lib/Lloyd.png" alt = "Lloyd" /></button>
<button id="6" class="answer"><img src= "lib/Nya.png" alt = "Jay" /></button>


<script src="scripts.js"></script>
</body>
</html>