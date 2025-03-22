<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    <script>
        const usernameInput = document.getElementById('username');
        const nameInput = document.getElementById('name');
        const surnameInput = document.getElementById('surname');
        const profileImageInput = document.getElementById('profileImage');
        const postImageInput = document.getElementById('postImage');
        const postTextInput = document.getElementById('postText');
        const previewUsername = document.getElementById('previewUsername');
        const previewFullname = document.getElementById('previewFullname');
        const previewProfileImg = document.getElementById('previewProfileImg');
        const previewPostImage = document.getElementById('previewPostImage');
        const previewPostText = document.getElementById('previewPostText');

        // Update preview in real-time
        usernameInput.addEventListener('input', updatePreview);
        nameInput.addEventListener('input', updatePreview);
        surnameInput.addEventListener('input', updatePreview);
        postTextInput.addEventListener('input', updatePreview);

        profileImageInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    previewProfileImg.src = e.target.result;
                    previewProfileImg.style.display = 'block';
                }
                reader.readAsDataURL(file);
            }
        });

        postImageInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    previewPostImage.src = e.target.result;
                    previewPostImage.style.display = 'block';
                }
                reader.readAsDataURL(file);
            }
        });

        function updatePreview() {
            previewUsername.textContent = usernameInput.value || 'kullaniciadi';
            previewFullname.textContent = `${nameInput.value || 'İsim'} ${surnameInput.value || 'Soyisim'}`;
            previewPostText.textContent = postTextInput.value || '';
        }

        function downloadPost() {
            const preview = document.getElementById('preview');
            
            html2canvas(preview, {
                scale: 2,
                useCORS: true,
                scrollY: -window.scrollY
            }).then(canvas => {
                const link = document.createElement('a');
                link.download = 'dtkariyer-gonderi.png';
                link.href = canvas.toDataURL('image/png');
                link.click();
            });
        }

        // Initial update
        updatePreview();
    </script>
