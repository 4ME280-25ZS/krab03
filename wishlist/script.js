// --- CONFIG: Replace these with your Supabase values ---
const SUPABASE_URL = 'REPLACE_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'REPLACE_SUPABASE_ANON_KEY';
// ------------------------------------------------------

const client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const giftsEl = document.getElementById('gifts');

async function loadGifts() {
  giftsEl.innerHTML = 'Načítám...';
  const { data, error } = await client.from('gifts').select('*').order('id', { ascending: true });
  if (error) {
    giftsEl.innerHTML = '<div class="meta">Chyba při načítání.</div>';
    console.error(error);
    return;
  }
  if (!data || data.length === 0) {
    giftsEl.innerHTML = '<div class="meta">Žádné dárky.</div>';
    return;
  }

  giftsEl.innerHTML = '';
  data.forEach(g => {
    const el = document.createElement('div'); el.className = 'gift';
    el.innerHTML = `<div>
        <div class="title">${escapeHtml(g.title)}</div>
        <div class="meta">${g.reserved_by ? 'Rezervováno: ' + escapeHtml(g.reserved_by) : 'Volné'}</div>
      </div>`;
    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.textContent = g.reserved_by ? 'Rezervováno' : 'Rezervovat';
    if (g.reserved_by) btn.disabled = true;
    btn.addEventListener('click', () => openReserveDialog(g.id, g.title));
    el.appendChild(btn);
    giftsEl.appendChild(el);
  });
}

function escapeHtml(s){ return String(s).replace(/[&<>"']/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c])); }

// Simple modal
function openReserveDialog(id, title){
  const modal = document.createElement('div'); modal.className = 'modal';
  const dialog = document.createElement('div'); dialog.className = 'dialog';
  dialog.innerHTML = `<div>Rezervovat: <strong>${escapeHtml(title)}</strong></div>`;
  const input = document.createElement('input'); input.placeholder = 'Vaše jméno';
  dialog.appendChild(input);
  const actions = document.createElement('div'); actions.className='actions';
  const cancel = document.createElement('button'); cancel.className='cancel'; cancel.textContent='Zrušit';
  const confirm = document.createElement('button'); confirm.className='confirm'; confirm.textContent='Potvrdit';
  actions.appendChild(cancel); actions.appendChild(confirm); dialog.appendChild(actions); modal.appendChild(dialog); document.body.appendChild(modal);

  cancel.onclick = () => modal.remove();
  confirm.onclick = async () => {
    const name = input.value && input.value.trim();
    if (!name) { input.focus(); return; }
    confirm.disabled = true; confirm.textContent = 'Odesílám...';
    await reserveGift(id, name);
    modal.remove();
  };
}

async function reserveGift(id, name){
  try{
    const { data, error } = await client.rpc('reserve_gift', { p_gift_id: id, p_name: name });
    if (error) throw error;
    // reload
    await loadGifts();
  }catch(err){
    alert('Rezervace se nezdařila. Možná už je rezervováno.');
    console.error(err);
    await loadGifts();
  }
}

// Start
loadGifts();
