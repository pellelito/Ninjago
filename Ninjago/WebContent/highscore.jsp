<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Highscore</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="logo" >
<a href="index.jsp"><img src= "lib/logo.png" alt = "Ninjago Logo"/></a>
</div>
<% 
out.println("Bra kämpat " + request.getParameter("playername") + "!<br>");
String userAnswer = request.getParameter("userAnswer"); 
String correctAnswer = request.getParameter("correctAnswer");
int result = 0;
// compares correct and user strings and shows result
for (int i = 0; i < userAnswer.length(); i++) {
	  if (userAnswer.charAt(i) == correctAnswer.charAt(i)) {
		  result++;
	  }
	}
result = result - 4;
out.println("Du hade " + result + " rätt av fem möjliga!<br>");
%>

<form action="videogame.jsp" >
<input type="hidden" name="playername" value="<%=request.getParameter("playername")%>">
<input type="submit" id="submit" value="Spela igen">
</form>
<img src= "lib/Start.png"alt = "Ninjas" />

</body>
</html>