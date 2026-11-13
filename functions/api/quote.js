// Cloudflare Pages Function: 询盘表单后端
// 接收静态站提交的询盘，转发到邮箱/第三方。
// 部署后表单 POST 到 /api/quote

export async function onRequestPost(context) {
  const { request } = context;

  try {
    const form = await request.formData();
    const name = (form.get('name') || '').toString().trim();
    const email = (form.get('email') || '').toString().trim();
    const phone = (form.get('phone') || '').toString().trim();
    const company = (form.get('company') || '').toString().trim();
    const message = (form.get('message') || '').toString().trim();

    if (!name || !email || !message) {
      return Response.json({ ok: false, error: 'Please fill name, email and message.' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ ok: false, error: 'Invalid email address.' }, { status: 400 });
    }

    // TODO: 接入真实通知渠道（Web3Forms / Formspree / 企业微信机器人 / Cloudflare Email Routing）
    // 当前未配置真实通知前，仅记录日志避免表单假死
    console.log('[quote]', JSON.stringify({ name, email, phone, company, message }));

    return Response.json({ ok: true, message: 'Thank you! Your request has been received.' });
  } catch (e) {
    return Response.json({ ok: false, error: 'Server error, please try again.' }, { status: 500 });
  }
}

export async function onRequestGet(context) {
  return Response.json({ ok: true, info: 'd-topmould.com quote API' });
}
