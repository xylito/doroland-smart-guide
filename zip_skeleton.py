import os
import zipfile

def zip_skeleton():
    source_dir = "smart-guide-web"
    output_filename = "smart-guide-web.zip"
    
    # 1. 대상 폴더가 있는지 확인
    if not os.path.exists(source_dir):
        print(f"❌ 오류: '{source_dir}' 폴더를 찾을 수 없습니다.")
        return

    # 2. 압축 파일 생성
    try:
        folder_name_in_zip = "smart-guide-web"  # 압축 해제 시 생성될 폴더명
        # 기존 파일이 있다면 덮어씁니다.
        with zipfile.ZipFile(output_filename, 'w', zipfile.ZIP_DEFLATED) as zipf:
            for root, dirs, files in os.walk(source_dir):
                # 숨김 파일 제외 (단, AGENT.md는 포함, .DS_Store는 제외)
                files = [f for f in files if (not f.startswith('.') or f == 'AGENT.md') and f != '.DS_Store']
                
                for file in files:
                    # 파일의 전체 경로
                    file_path = os.path.join(root, file)
                    # 압축 파일 내부에 루트(바로) 파일들이 오도록 저장 (이중 폴더 방지)
                    arcname = os.path.relpath(file_path, source_dir)
                    zipf.write(file_path, arcname)
                    print(f"  [+] 압축됨: {arcname}")
                    
        print(f"\n✅ 압축 완료: {output_filename}")
        print(f"📂 대상 폴더: {source_dir}")
        
    except Exception as e:
        print(f"❌ 압축 중 오류 발생: {e}")

if __name__ == "__main__":
    zip_skeleton()
