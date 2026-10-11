<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><title>Nouveau message de contact</title></head>
<body style="font-family:Arial,sans-serif;line-height:1.6;color:#1e293b">
    <h2>Nouveau message reçu depuis le site Solutions IT</h2>
    <p><strong>Nom :</strong> {{ $data['name'] }}</p>
    <p><strong>E-mail :</strong> {{ $data['email'] }}</p>
    <p><strong>Objet :</strong> {{ $data['subject'] }}</p>
    <p><strong>Message :</strong></p>
    <div style="white-space:pre-wrap;background:#f1f5f9;padding:16px;border-left:4px solid #2563eb">{{ $data['message'] }}</div>
    <p style="font-size:12px;color:#64748b">Message envoyé via le formulaire de contact de Solutions IT.</p>
</body>
</html>
