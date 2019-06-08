import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const profile = await req.context.models.Profile.find();
  return res.send(profile);
});

router.get('/:profileId', async (req, res) => {
  const profile = await req.context.models.Profile.findById(
    req.params.profileId,
  );
  return res.send(profile);
});

router.post('/create-profile', async (req, res) => {
  const profile = await req.context.models.Profile.create({
    text: req.body.text,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
  });
  return res.send('profile create successfully');
});

router.delete('/:profileId', async (req, res) => {
  const profile = await req.context.models.Profile.findById(
    req.params.profileId,
  );
  let result = null;
  if (profile) {
    result = await profile.remove();
  }
  return res.send(result);
});

export default router;
