# Wishlist - Rezervace dárků

Co je to: jednoduchá statická stránka, kde lidé mohou vidět seznam dárků a bez přihlášení si u vybraného dárku napsat své jméno (rezervovat).

Co potřebujete v Supabase
1. Vytvořte nový projekt na https://app.supabase.com
2. V projektu otevřete **Settings → API** a zkopírujte:
   - `Project URL` → to bude `SUPABASE_URL`
   - `anon public` key → to bude `SUPABASE_ANON_KEY`

Kde vložit tyto hodnoty
1. Otevřete `wishlist/script.js` a nahraďte na začátku hodnoty `REPLACE_SUPABASE_URL` a `REPLACE_SUPABASE_ANON_KEY` vašimi klíči.

Spuštění DB schématu
1. V Supabase přejděte do **SQL Editor → New query**
2. Zkopírujte obsah `wishlist/schema.sql` a spusťte ho (Run)

Co SQL udělá
- vytvoří tabulku `gifts`
- vloží několik ukázkových položek
- vytvoří funkci `reserve_gift(gift_id, name)` jako `SECURITY DEFINER` a povolí jejímu volání roli `anon`
- zapne RLS a zajistí, že přímé aktualizace tabulky nejsou možné (jen přes funkci)

Nasazení na GitHub Pages
1. Commitněte a pushejte složku `wishlist` do repozitáře (už to mohu udělat za vás).
2. Zapněte GitHub Pages v Settings → Pages (branch `main`, folder `/ (root)` nebo vyberte `gh-pages` podle vašeho workflow).

Testování
1. Otevřete `wishlist/index.html` ve vašem prohlížeči lokálně pro rychlou kontrolu.
2. Po vložení `SUPABASE_URL` a `SUPABASE_ANON_KEY` by stránka měla načíst dárky a umožnit rezervaci.

Bezpečnostní poznámka
- `SUPABASE_ANON_KEY` je veřejný klíč určený pro frontend (sdílejte ho s frontendem). Nemá plná práva.
- `service_role` key NIKDY nesdílejte veřejně.
