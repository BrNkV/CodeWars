/** COMPLETE
 * Description:
Make a simple function called greet that returns the most-famous "hello world!".

Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?


Описание: Создайте простую функцию с именем greet, которая возвращает самый известный «привет, мир!».

Очки стиля Конечно, это очень просто. Но насколько вы умны, чтобы создать самый творческий мир Hello, о котором вы только можете подумать? Какое решение «привет, мир» вы бы хотели показать своим друзьям?
 */

function greet() {
    let hello = 'hello world!';
    let out = '';

    for (let i = 0; i < hello.length; i++) {
        out += hello[i];
    }

    return out;
}