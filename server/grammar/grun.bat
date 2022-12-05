@echo off
cd ./server/grammar/java-testrig

javac -cp "%CLASSPATH%" ./*.java
java -cp .;"%CLASSPATH%" org.antlr.v4.gui.TestRig %* Leviathon program -gui "D:\MHWI Mods\Thk De- Compiler\RathianTest\combat_blinded.nack"