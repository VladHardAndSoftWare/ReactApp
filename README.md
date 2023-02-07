# ReactApp

В папке ReactApp - содержатся исходные файлы проекта.

В папке Run - содеражится файл для запуска сайта.

ReactDatabase2.bak - необходим для создания базы данных.
_____ 

### Установка базы данных

Перед началом установки необходимо будет скачать две программы:

* [MSQL Server-express](https://www.microsoft.com/ru-RU/download/confirmation.aspx?id=101064)

* [SQL Server Management Studio](https://aka.ms/ssmsfullsetup)

После установки необходимо восстановить базу данных из файла ReactDatabase2.bak в SQL Server Management Studio как показано на рисунках ниже:
 
![image](https://user-images.githubusercontent.com/42782084/217262794-6a27eb26-1456-4b31-bb06-d742582ebaa1.png)

![image](https://user-images.githubusercontent.com/42782084/217262849-f95a54b4-f28f-426e-86a1-063bfb1c33bb.png)

**Важно:** Что бы база данных корректно работала необходимо что бы строка соединения соответствовала схеме: Data Source=localhost\\SQLEXPRESS;Initial Catalog=ReactDatabase2.
 
 _____
 
 ### Установка сайта
 
 Для установки необходимо скачать файлы из папки Run и запустить ReactApp.exe файл.

При возникновении ошибки "This app can't run on your PC" требуется скачать файл ReactApp.exe отдельно.

![image](https://user-images.githubusercontent.com/42782084/217264234-3e65c816-b328-4a34-a6e8-5f5d7d646c2c.png)

После запуска программы нужно перейти на указаную в консоли веб страницу.

![image](https://user-images.githubusercontent.com/42782084/217265317-1f18145e-7882-4e9c-8114-f5ff22ab482b.png)

