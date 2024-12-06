<jsp:useBean id="u" class="com.annum.www.User"></jsp:useBean>

<jsp:setProperty  property="*" name="u"/>

Records are <br>

<jsp:getProperty property="username" name="u"/> <br>
<jsp:getProperty property="password" name="u"/> <br>
<jsp:getProperty property="email" name="u"/> <br>
