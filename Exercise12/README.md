Praca z GITem powinna przebiegać w standardowy już sposób - tworzymy w swoim lokalnym repozytorium folder o nazwie 'dom-api'. Tworzymy lokalnie gałąź z gałęzi main i nazywamy ją tak samo jak folder - 'dom-api', następnie commitujemy zmiany (ilość commitów dowolna, ale w języku angielskim) następnie robimy push i wystawiamy Pull Request do gałęzi głównej, info do mnie i code review :)

W zadaniu skupcie się na poprawnej semantyce aplikacji i poprawnych stylach, ale aplikacja nie musi być 1 do 1 zgodna z designem - im bliżej tym lepiej.
Aplikacja powinna być responsywna.

# Zadanie - Tip Calculator

![enter image description here](https://github.com/infoshareacademy/jfdzr9-homeworks/blob/main/homework-6/tip-calculator/design/desktop-design-completed.jpg)

Stwórz, bazując na załączonych plikach z designem, kalkulator napiwków, w którym podajemy kwotę rachunku, następnie wybieramy jedną spośród kilku opcji określających jaki procent całości kwoty ma stanowić napiwek oraz podajemy ilość osób, na które rachunek będzie podzielony. Po kliknięciu w przycisk zostaną obliczone wartości w podsumowaniu. W oknie wyświetlamy podsumowanie, w którym będzie informacja o tym ile napiwku przypada na jedną osobę i ile w całości przypada na osobę do zapłacenia (czyli suma rachunku podzielonego na ilość osób i napiwku podzielonego na ilość osób). Np gdy rachunek wysoni 100zł i napiwek to 10% (10zł) to przy dwóch osobach do zapłacenia będzie dla każdej 50zł (100zł/2) z rachunku i 5zł z napiwku (10zł/2).

Dodatkowo:

1. Przycisk 'Reset' Będzie niedostępny dopóki przynajmniej jedna z trzech rzeczy nie jest podana - kwota rachunku, wielkość napiwku lub liczba osób. Zaznaczenie przynajmniej jednej z tych rzeczy sprawia, że możliwe jest kliknięcie przycisku 'reset' - wówczas kwota rachunku zamieniana jest na '0', wielkość napiwku na '0' oraz liczba osób również na '0'.
2. Zaznaczona kwota napiwku powinna być w jakiś sposób wyróżniona (np. dodatkowa klasa która zmienia kolor tła na jaśniejszy).

## Termin

Termin oddania zadania przypada na 16.12.2022 do północy.

## Punktacja

Za zadanie można zdobyć max 100 punktów:

- Poprawna semantyka - 20 pkt
- Poprawne stylowanie, responsywność - 20 pkt
- Poprawny JS, poprawna logika, czystość kodu - 60 pkt
